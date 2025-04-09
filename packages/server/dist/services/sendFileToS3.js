import { generateId } from "@arkyn/shared";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { unstable_composeUploadHandlers as composeUploadHandlers, unstable_createFileUploadHandler as createFileUploadHandler, unstable_parseMultipartFormData as parseMultipartFormData, } from "@remix-run/node";
import fs from "fs";
import sharp from "sharp";
import { BadRequest } from "../http/badResponses/badRequest";
import { getScopedParams } from "./getScopedParams";
async function s3Upload(fileStream, contentType, awsConfig) {
    const uploadParams = {
        Bucket: awsConfig.AWS_S3_BUCKET,
        Key: `uploads/${generateId("text", "v4")}`,
        Body: fileStream,
        ContentType: contentType,
    };
    const s3Client = new S3Client({
        region: awsConfig.AWS_REGION,
        credentials: {
            accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
            secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
        },
    });
    const command = new PutObjectCommand(uploadParams);
    try {
        await s3Client.send(command);
    }
    catch (error) {
        console.error(error);
    }
    return {
        location: `https://${awsConfig.AWS_S3_BUCKET}.s3.amazonaws.com/${uploadParams.Key}`,
    };
}
/**
 * Handles file uploads to an AWS S3 bucket. This function processes a file
 * from a multipart form request, validates and optionally compresses the file,
 * and uploads it to S3. It supports image-specific operations such as resizing
 * validation and quality reduction.
 *
 * @param request - The HTTP request containing the multipart form data.
 * @param awsS3Config - Configuration object for AWS S3, including bucket name,
 * region, and credentials.
 * @param config - Optional configuration object for file handling.
 *
 * @param config.fileName - The name of the form field containing the file. Defaults to `"file"`.
 * @param config.maxPartSize - The maximum size (in bytes) for each part of the file. Defaults to `5_000_000`.
 * @param config.reduceImageQuality - The quality percentage for image compression. Defaults to `100`.
 * @param config.validateImageSize - Whether to validate the image dimensions. Defaults to `false`.
 * @param config.validateImageMessage - The error message template for invalid image dimensions.
 * Defaults to `"Invalid dimensions {{width}}px x {{height}}px"`.
 *
 * @returns A promise that resolves to an object containing the uploaded file's URL
 * or an error message if validation fails.
 *
 * @throws {BadRequest} If no file is uploaded.
 *
 * @example
 * ```typescript
 * const awsS3Config = {
 *   AWS_S3_BUCKET: "my-bucket",
 *   AWS_REGION: "us-east-1",
 *   AWS_ACCESS_KEY_ID: "my-access-key",
 *   AWS_SECRET_ACCESS_KEY: "my-secret-key",
 * };
 *
 * const config = {
 *   fileName: "upload",
 *   maxPartSize: 10_000_000,
 *   reduceImageQuality: 80,
 *   validateImageSize: true,
 *   validateImageMessage: "Invalid dimensions {{width}}px x {{height}}px",
 * };
 *
 * const response = await sendFileToS3(request, awsS3Config, config);
 * if (response.error) {
 *   console.error(response.error);
 * } else {
 *   console.log("File uploaded to:", response.url);
 * }
 * ```
 */
const sendFileToS3 = async (request, awsS3Config, config) => {
    const fileName = config?.fileName || "file";
    const maxPartSize = config?.maxPartSize || 5_000_000;
    const reduceImageQuality = config?.reduceImageQuality || 100;
    const validateImageSize = config?.validateImageSize || false;
    const validateImageMessage = config?.validateImageMessage ||
        "Invalid dimensions {{width}}px x {{height}}px";
    const uploadHandler = composeUploadHandlers(createFileUploadHandler({
        maxPartSize,
        file: ({ filename }) => filename,
    }));
    const formData = await parseMultipartFormData(request, uploadHandler);
    const file = formData.get(fileName);
    if (!file)
        throw new BadRequest("No file uploaded");
    const filterParams = getScopedParams(request);
    const width = filterParams.get("w");
    const height = filterParams.get("h");
    const reduceQuality = filterParams.get("reduceQuality");
    const quality = reduceQuality ? +reduceQuality : reduceImageQuality;
    const isImage = file.type.startsWith("image");
    if (isImage && width && height && validateImageSize) {
        const image = sharp(file.getFilePath());
        const metadata = await image.metadata();
        if (metadata.width && metadata.height) {
            const widthDiff = Math.abs(metadata.width - +width);
            const heightDiff = Math.abs(metadata.height - +height);
            if (widthDiff > 10 || heightDiff > 10) {
                return {
                    error: validateImageMessage
                        .replace("{{width}}", width)
                        .replace("{{height}}", height),
                };
            }
        }
    }
    if (isImage) {
        let image = sharp(file.getFilePath());
        if (file.type === "image/jpeg") {
            image = image.jpeg({ quality });
        }
        else if (file.type === "image/png") {
            image = image.png({ quality });
        }
        else if (file.type === "image/webp") {
            image = image.webp({ quality });
        }
        const compressedFilePath = file.getFilePath() + "_compressed";
        await image.toFile(compressedFilePath);
        file.getFilePath = () => compressedFilePath;
        const streamFile = fs.createReadStream(file.getFilePath());
        const apiResponse = await s3Upload(streamFile, file.type, awsS3Config);
        fs.unlink(compressedFilePath, (err) => {
            if (err)
                console.error(`Delete image error: ${err}`);
        });
        return { url: apiResponse.location };
    }
    const streamFile = fs.createReadStream(file.getFilePath());
    const apiResponse = await s3Upload(streamFile, file.type, awsS3Config);
    return { url: apiResponse.location };
};
export { sendFileToS3 };

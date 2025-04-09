import type { SendFileToS3Function } from "@arkyn/types";
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
declare const sendFileToS3: SendFileToS3Function;
export { sendFileToS3 };
//# sourceMappingURL=sendFileToS3.d.ts.map
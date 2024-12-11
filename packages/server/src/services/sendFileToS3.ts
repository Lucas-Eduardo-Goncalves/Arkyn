import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createFileUploadHandler as createFileUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
  type ActionFunctionArgs,
  type NodeOnDiskFile,
} from "@remix-run/node";
import { randomUUID } from "crypto";
import fs from "fs";
import sharp from "sharp";
import { BadRequestError } from "../httpBadResponses/badRequest";
import { getScopedParams } from "./getScopedParams";

type AWSConfig = {
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_S3_BUCKET: string;
};

type Config = {
  maxPartSize?: number;
  fileName?: string;
};

async function s3_upload(
  fileStream: fs.ReadStream,
  contentType: string,
  awsS3Config: AWSConfig
) {
  const {
    AWS_ACCESS_KEY_ID,
    AWS_REGION,
    AWS_S3_BUCKET,
    AWS_SECRET_ACCESS_KEY,
  } = awsS3Config;

  const filePath = fileStream.path;
  let fileName = "";

  if (typeof filePath === "string") {
    fileName = filePath.split("/").pop() || "";
  } else {
    fileName = randomUUID();
  }

  const uploadParams = {
    Bucket: AWS_S3_BUCKET,
    Key: `uploads/${Date.now()}-${fileName}`,
    Body: fileStream,
    ContentType: contentType,
  };

  const s3Client = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  const command = new PutObjectCommand(uploadParams);

  try {
    await s3Client.send(command);
  } catch (error) {
    console.error(error);
  }

  return {
    location: `https://${AWS_S3_BUCKET}.s3.amazonaws.com/${uploadParams.Key}`,
  };
}

async function sendFileToS3(
  props: ActionFunctionArgs,
  awsS3Config: AWSConfig,
  config: Config = {
    maxPartSize: 5_000_000,
    fileName: "file",
  }
) {
  const { fileName = "file", maxPartSize = 5_000_000 } = config;
  const { request } = props;

  const uploadHandler = composeUploadHandlers(
    createFileUploadHandler({
      maxPartSize,
      file: ({ filename }) => filename,
    })
  );

  const formData = await parseMultipartFormData(request, uploadHandler);
  const file = formData.get(fileName) as unknown as NodeOnDiskFile;

  if (!file) throw new BadRequestError("No file uploaded");

  const filterParams = getScopedParams(request);
  const width = filterParams.get("w");
  const height = filterParams.get("h");

  const isImage = file.type.startsWith("image");

  if (isImage && width && height) {
    const image = sharp(file.getFilePath());
    const metadata = await image.metadata();

    if (metadata.width && metadata.height) {
      const widthDiff = Math.abs(metadata.width - +width);
      const heightDiff = Math.abs(metadata.height - +height);

      if (widthDiff > 10 || heightDiff > 10) {
        return {
          error: `Formato inválido ${metadata.width}px x ${metadata.height}px`,
        };
      }
    }
  }

  const streamFile = fs.createReadStream(file.getFilePath());
  const apiResponse = await s3_upload(streamFile, file.type, awsS3Config);

  return { url: apiResponse.location };
}

export { sendFileToS3 };

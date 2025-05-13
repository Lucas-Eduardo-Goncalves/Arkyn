import { generateId } from "@arkyn/shared";
import type { AwsConfig, SendFileToS3Function } from "@arkyn/types";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  MultipartParseError,
  parseMultipartRequest,
} from "@mjackson/multipart-parser";
import fs from "fs";
import sharp from "sharp";
import { BadRequest } from "../http/badResponses/badRequest";
import { getScopedParams } from "./getScopedParams";

type Saved = {
  tempPath: string;
  mediaType: string;
};

async function s3Upload(
  fileStream: fs.ReadStream,
  contentType: string,
  awsConfig: AwsConfig
) {
  const Key = `uploads/${generateId("text", "v4")}`;
  const uploadParams = {
    Bucket: awsConfig.AWS_S3_BUCKET,
    Key,
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
  await s3Client.send(new PutObjectCommand(uploadParams));
  return {
    location: `https://${awsConfig.AWS_S3_BUCKET}.s3.amazonaws.com/${Key}`,
  };
}

const sendFileToS3: SendFileToS3Function = async (
  request,
  awsS3Config,
  config
) => {
  const fileName = config?.fileName ?? "file";
  const reduceImageQuality = config?.reduceImageQuality ?? 100;
  const validateImageSize = config?.validateImageSize ?? false;
  const validateImageMessage =
    config?.validateImageMessage ??
    "Invalid dimensions {{width}}px x {{height}}px";

  let saved: Saved = {
    tempPath: "",
    mediaType: "",
  };

  try {
    await parseMultipartRequest(request, async (part) => {
      if (part.isFile && part.name === fileName) {
        const bytes = await part.bytes();
        const tempPath = `/tmp/${generateId("text", "v4")}-${part.filename}`;
        await Bun.write(tempPath, bytes);
        if (!part.mediaType) throw new Error("mediaType is undefined");

        saved = {
          tempPath,
          mediaType: part.mediaType,
        };
      }
    });
  } catch (err) {
    if (err instanceof MultipartParseError) {
      throw new BadRequest(`Falha ao processar upload: ${err.message}`);
    }
    throw err;
  }

  if (saved.mediaType === "") throw new BadRequest("mediaType é indefinido");
  if (saved.tempPath === "") throw new BadRequest("tempPath é indefinido");

  const filterParams = getScopedParams(request);
  const width = filterParams.get("w");
  const height = filterParams.get("h");
  const quality =
    filterParams.get("reduceQuality") !== null
      ? +filterParams.get("reduceQuality")!
      : reduceImageQuality;

  const isImage = saved.mediaType.startsWith("image/");

  if (isImage && width && height && validateImageSize) {
    const meta = await sharp(saved.tempPath).metadata();
    if (meta.width && meta.height) {
      const dw = Math.abs(meta.width - +width);
      const dh = Math.abs(meta.height - +height);
      if (dw > 10 || dh > 10) {
        fs.unlink(saved.tempPath, () => {});
        return {
          error: validateImageMessage
            .replace("{{width}}", width)
            .replace("{{height}}", height),
        };
      }
    }
  }

  let uploadPath = saved.tempPath;
  if (isImage) {
    const ext = saved.mediaType.split("/")[1];
    const compressed = `${saved.tempPath}_cmp.${ext}`;
    let img = sharp(saved.tempPath);
    if (ext === "jpeg" || ext === "jpg") img = img.jpeg({ quality });
    else if (ext === "png") img = img.png({ quality });
    else if (ext === "webp") img = img.webp({ quality });
    await img.toFile(compressed);
    fs.unlink(saved.tempPath, () => {});
    uploadPath = compressed;
  }

  const stream = fs.createReadStream(uploadPath);
  const { location } = await s3Upload(stream, saved.mediaType, awsS3Config);

  fs.unlink(uploadPath, () => {});
  return { url: location };
};

export { sendFileToS3 };

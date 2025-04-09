type AwsConfig = {
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_S3_BUCKET: string;
};

type Config = {
  maxPartSize?: number;
  fileName?: string;
  reduceImageQuality?: number;
  validateImageSize?: boolean;
  validateImageMessage?: string;
};

type SendFileToS3Function = (
  request: Request,
  awsConfig: AwsConfig,
  config?: Config
) => Promise<{
  url?: string;
  error?: string;
}>;

export type { AwsConfig, SendFileToS3Function };

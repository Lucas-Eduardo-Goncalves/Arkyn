import { type ActionFunctionArgs } from "@remix-run/node";
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
declare function sendFileToS3(props: ActionFunctionArgs, awsS3Config: AWSConfig, config?: Config): Promise<{
    error: string;
    url?: undefined;
} | {
    url: string;
    error?: undefined;
}>;
export { sendFileToS3 };
//# sourceMappingURL=sendFileToS3.d.ts.map
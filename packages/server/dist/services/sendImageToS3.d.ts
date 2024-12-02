import { type ActionFunctionArgs } from "@remix-run/node";
type AWSConfig = {
    AWS_REGION: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_S3_BUCKET: string;
};
declare function sendImageToS3(props: ActionFunctionArgs, awsS3Config: AWSConfig): Promise<{
    error: string;
    url?: undefined;
} | {
    url: string;
    error?: undefined;
}>;
export { sendImageToS3 };
//# sourceMappingURL=sendImageToS3.d.ts.map
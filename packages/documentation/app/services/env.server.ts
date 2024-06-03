import { z } from "zod";

const envSchema = z.object({
  API_BASE_URL: z.string().min(3).url(),
  USER_TOKEN: z.string().min(3),
  CHANNEL_ID: z.string().min(3),
});

function formatErrorMessage(error: z.ZodError) {
  const title = "Error validating env variables:";
  const lines = Object.entries(error.flatten().fieldErrors).map(
    ([key, value]) => `-> ${key}: ${value}`
  );
  return [title, ...lines].join("\n");
}

const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) throw formatErrorMessage(parsedEnv.error);

const env = parsedEnv.data;

export { env };

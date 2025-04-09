import { Schema } from "zod";

type SuccessResponse<T extends FormParseProps> = {
  success: true;
  data: T[1] extends Schema<infer U> ? U : never;
};

type ErrorResponse = {
  success: false;
  fields: { [x: string]: string };
  fieldErrors: { [x: string]: string };
};

type FormParseProps = [formData: { [k: string]: any }, schema: Schema];

type FormParseReturnType<T extends FormParseProps> =
  | SuccessResponse<T>
  | ErrorResponse;

export type { FormParseProps, FormParseReturnType };

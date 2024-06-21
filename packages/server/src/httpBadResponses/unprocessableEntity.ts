import type { HttpDataResponse } from "@arkyn/types";

type UnprocessableEntityErrorProps = {
  data?: any;
  fieldErrors?: Record<string, string>;
  fields?: Record<string, string>;
  message?: string;
};

function unprocessableEntity(
  error: UnprocessableEntityError
): HttpDataResponse {
  return {
    status: 400,
    success: false,
    name: error.name,
    message: error.message,
    data: error.data || null,
    fieldErrors: error.fieldErrors || null,
    fields: error.fields || null,
  };
}

class UnprocessableEntityError extends Error {
  fieldErrors: any;
  fields: any;
  data: any;

  constructor(data: UnprocessableEntityErrorProps) {
    super(data.message);
    this.data = data?.data || null;
    this.fieldErrors = data?.fieldErrors || null;
    this.fields = data?.fields || null;
    this.name = "UnprocessableEntityError";
  }
}

export { unprocessableEntity, UnprocessableEntityError };

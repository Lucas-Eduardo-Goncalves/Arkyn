import type { HttpResponse } from "@arkyn/types";

function forbidden(error: Error): HttpResponse {
  return {
    status: 403,
    success: false,
    name: error.name,
    message: error.message,
    cause: error.cause,
  };
}

class ForbiddenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
    this.message = message;
  }
}

export { forbidden, ForbiddenError };

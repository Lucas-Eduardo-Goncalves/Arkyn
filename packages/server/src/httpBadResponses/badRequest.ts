import type { HttpResponse } from "@arkyn/types";

function badRequest(error: Error): HttpResponse {
  return {
    status: 400,
    success: false,
    name: error.name,
    message: error.message,
    cause: error.cause,
  };
}

class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}

export { badRequest, BadRequestError };

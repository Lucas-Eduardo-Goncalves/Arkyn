import type { HttpResponse } from "@arkyn/types";

function serverError(error: Error): HttpResponse {
  return {
    status: 500,
    success: false,
    name: error.name,
    message: error.message,
    cause: error.cause,
  };
}

class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServerError";
  }
}

export { serverError, ServerError };

import type { HttpResponse } from "@arkyn/types";

function notFound(error: Error): HttpResponse {
  return {
    status: 404,
    success: false,
    name: error.name,
    message: error.message,
    cause: error.cause,
  };
}

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export { notFound, NotFoundError };

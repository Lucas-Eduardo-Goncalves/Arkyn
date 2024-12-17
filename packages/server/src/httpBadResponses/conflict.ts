import type { HttpResponse } from "@arkyn/types";

function conflict(error: Error): HttpResponse {
  return {
    status: 409,
    success: false,
    name: error.name,
    message: error.message,
    cause: error.cause,
  };
}

class ConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
    this.message = message;
  }
}

export { conflict, ConflictError };

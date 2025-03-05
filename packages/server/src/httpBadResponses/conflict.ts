function conflict(error: Error) {
  return Response.json(
    {
      status: 409,
      success: false,
      name: error.name,
      message: error.message,
      cause: error.cause,
    },
    { status: 409 }
  );
}

class ConflictError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "ConflictError";
    this.message = message;
  }
}

export { conflict, ConflictError };

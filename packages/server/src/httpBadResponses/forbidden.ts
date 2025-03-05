function forbidden(error: Error) {
  return Response.json(
    {
      status: 403,
      success: false,
      name: error.name,
      message: error.message,
      cause: error.cause,
    },
    { status: 403 }
  );
}

class ForbiddenError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "ForbiddenError";
    this.message = message;
  }
}

export { forbidden, ForbiddenError };

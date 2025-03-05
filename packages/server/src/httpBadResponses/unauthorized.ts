function unauthorized(error: Error) {
  return Response.json(
    {
      status: 401,
      success: false,
      name: error.name,
      message: error.message,
      cause: error.cause,
    },
    { status: 401 }
  );
}

class UnauthorizedError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "UnauthorizedError";
    this.message = message;
  }
}

export { unauthorized, UnauthorizedError };

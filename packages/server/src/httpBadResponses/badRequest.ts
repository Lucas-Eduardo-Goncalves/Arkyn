function badRequest(error: BadRequestError) {
  return new Response(
    JSON.stringify({
      status: 400,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class BadRequestError {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "BadRequestError";
    this.message = message;
    this.cause = cause ? JSON.stringify(cause) : undefined;
  }
}

export { badRequest, BadRequestError };

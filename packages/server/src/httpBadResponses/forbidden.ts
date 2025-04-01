function forbidden(error: ForbiddenError) {
  return new Response(
    JSON.stringify({
      status: 403,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 403,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class ForbiddenError {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "ForbiddenError";
    this.message = message;
    this.cause = cause ? JSON.stringify(cause) : undefined;
  }
}

export { forbidden, ForbiddenError };

function unauthorized(error: UnauthorizedError) {
  return new Response(
    JSON.stringify({
      status: 401,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 401,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class UnauthorizedError {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "UnauthorizedError";
    this.message = message;
    this.cause = cause;
  }
}

export { unauthorized, UnauthorizedError };

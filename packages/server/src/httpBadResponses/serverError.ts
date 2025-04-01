function serverError(error: ServerError) {
  return new Response(
    JSON.stringify({
      status: 500,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 500,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class ServerError {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "ServerError";
    this.message = message;
    this.cause = cause ? JSON.stringify(cause) : undefined;
  }
}

export { serverError, ServerError };

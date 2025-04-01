function notFound(error: NotFoundError) {
  return new Response(
    JSON.stringify({
      status: 404,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 404,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class NotFoundError {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "NotFoundError";
    this.message = message;
    this.cause = cause ? JSON.stringify(cause) : undefined;
  }
}

export { notFound, NotFoundError };

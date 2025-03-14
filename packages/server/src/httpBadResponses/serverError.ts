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

class ServerError implements Error {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "ServerError";
    this.message = message;
  }
}

export { serverError, ServerError };

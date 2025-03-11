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

  constructor(message: string) {
    this.name = "UnauthorizedError";
    this.message = message;
  }
}

export { unauthorized, UnauthorizedError };

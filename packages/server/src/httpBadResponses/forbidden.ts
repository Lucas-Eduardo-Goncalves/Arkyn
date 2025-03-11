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

  constructor(message: string) {
    this.name = "ForbiddenError";
    this.message = message;
  }
}

export { forbidden, ForbiddenError };

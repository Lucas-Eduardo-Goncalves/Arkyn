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

  constructor(message: string) {
    this.name = "BadRequestError";
    this.message = message;
  }
}

export { badRequest, BadRequestError };

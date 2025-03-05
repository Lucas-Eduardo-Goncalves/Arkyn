function badRequest(error: BadRequestError) {
  return Response.json(
    {
      status: 400,
      success: false,
      name: error.name,
      message: error.message,
    },
    { status: 400 }
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

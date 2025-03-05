function notFound(error: NotFoundError) {
  return Response.json(
    {
      status: 404,
      success: false,
      name: error.name,
      message: error.message,
    },
    { status: 404 }
  );
}

class NotFoundError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "NotFoundError";
    this.message = message;
  }
}

export { notFound, NotFoundError };

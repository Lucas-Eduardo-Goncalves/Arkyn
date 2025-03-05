function conflict(error: ConflictError) {
  return Response.json(
    {
      status: 409,
      success: false,
      name: error.name,
      message: error.message,
    },
    { status: 409 }
  );
}

class ConflictError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "ConflictError";
    this.message = message;
  }
}

export { conflict, ConflictError };

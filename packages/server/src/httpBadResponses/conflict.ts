function conflict(error: ConflictError) {
  return new Response(
    JSON.stringify({
      status: 409,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 409,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
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

type UnprocessableEntityErrorProps = {
  data?: any;
  fieldErrors?: Record<string, string>;
  fields?: Record<string, string>;
  message?: string;
};

function unprocessableEntity(error: UnprocessableEntityError) {
  return new Response(
    JSON.stringify({
      status: 422,
      success: false,
      name: error.name,
      message: error.message,
    }),
    {
      status: 422,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    }
  );
}

class UnprocessableEntityError {
  name: string;
  message?: string;
  fieldErrors: any;
  fields: any;
  data: any;

  constructor(data: UnprocessableEntityErrorProps) {
    this.data = data?.data || null;
    this.fieldErrors = data?.fieldErrors || null;
    this.fields = data?.fields || null;
    this.name = "UnprocessableEntity";
    this.message = data?.message;
  }
}

export { unprocessableEntity, UnprocessableEntityError };

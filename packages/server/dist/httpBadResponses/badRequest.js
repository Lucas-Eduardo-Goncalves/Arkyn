function badRequest(error) {
    return new Response(JSON.stringify({
        status: 400,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 400,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class BadRequestError {
    name;
    message;
    cause;
    constructor(message, cause) {
        this.name = "BadRequestError";
        this.message = message;
        this.cause = cause ? JSON.stringify(cause) : undefined;
    }
}
export { badRequest, BadRequestError };

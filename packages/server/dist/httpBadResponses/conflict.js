function conflict(error) {
    return new Response(JSON.stringify({
        status: 409,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 409,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class ConflictError {
    name;
    message;
    cause;
    constructor(message, cause) {
        this.name = "ConflictError";
        this.message = message;
        this.cause = cause;
    }
}
export { conflict, ConflictError };

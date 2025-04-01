function forbidden(error) {
    return new Response(JSON.stringify({
        status: 403,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 403,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class ForbiddenError {
    name;
    message;
    cause;
    constructor(message, cause) {
        this.name = "ForbiddenError";
        this.message = message;
        this.cause = cause;
    }
}
export { forbidden, ForbiddenError };

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
    constructor(message) {
        this.name = "ForbiddenError";
        this.message = message;
    }
}
export { forbidden, ForbiddenError };

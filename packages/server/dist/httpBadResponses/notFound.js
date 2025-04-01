function notFound(error) {
    return new Response(JSON.stringify({
        status: 404,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 404,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class NotFoundError {
    name;
    message;
    cause;
    constructor(message, cause) {
        this.name = "NotFoundError";
        this.message = message;
        this.cause = cause;
    }
}
export { notFound, NotFoundError };

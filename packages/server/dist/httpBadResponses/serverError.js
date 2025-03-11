function serverError(error) {
    return new Response(JSON.stringify({
        status: 500,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 500,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class ServerError {
    name;
    message;
    constructor(message) {
        this.name = "ServerError";
        this.message = message;
    }
}
export { serverError, ServerError };

function unauthorized(error) {
    return new Response(JSON.stringify({
        status: 401,
        success: false,
        name: error.name,
        message: error.message,
    }), {
        status: 401,
        statusText: "Bad Request",
        headers: { "Content-Type": "application/json" },
    });
}
class UnauthorizedError {
    name;
    message;
    constructor(message) {
        this.name = "UnauthorizedError";
        this.message = message;
    }
}
export { unauthorized, UnauthorizedError };

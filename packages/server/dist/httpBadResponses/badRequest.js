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
    constructor(message) {
        this.name = "BadRequestError";
        this.message = message;
    }
}
export { badRequest, BadRequestError };

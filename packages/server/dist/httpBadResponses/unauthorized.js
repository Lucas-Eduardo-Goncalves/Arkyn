function unauthorized(error) {
    return Response.json({
        status: 401,
        success: false,
        name: error.name,
        message: error.message,
    }, { status: 401 });
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

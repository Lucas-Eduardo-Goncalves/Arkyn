function unauthorized(error) {
    return {
        status: 401,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        this.message = message;
    }
}
export { unauthorized, UnauthorizedError };

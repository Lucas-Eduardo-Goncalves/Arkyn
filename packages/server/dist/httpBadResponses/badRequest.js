function badRequest(error) {
    return {
        status: 400,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadRequestError";
        this.message = message;
    }
}
export { badRequest, BadRequestError };

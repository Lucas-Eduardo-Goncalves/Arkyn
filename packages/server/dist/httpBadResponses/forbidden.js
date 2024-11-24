function forbidden(error) {
    return {
        status: 403,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = "ForbiddenError";
    }
}
export { forbidden, ForbiddenError };

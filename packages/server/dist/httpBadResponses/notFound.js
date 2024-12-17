function notFound(error) {
    return {
        status: 404,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.message = message;
    }
}
export { notFound, NotFoundError };

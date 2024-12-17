function serverError(error) {
    return {
        status: 500,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = "ServerError";
        this.message = message;
    }
}
export { serverError, ServerError };

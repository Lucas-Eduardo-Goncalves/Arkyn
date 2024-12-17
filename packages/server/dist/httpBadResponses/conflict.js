function conflict(error) {
    return {
        status: 409,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    };
}
class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConflictError";
        this.message = message;
    }
}
export { conflict, ConflictError };

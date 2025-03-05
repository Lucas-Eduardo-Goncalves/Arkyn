function conflict(error) {
    return Response.json({
        status: 409,
        success: false,
        name: error.name,
        message: error.message,
    }, { status: 409 });
}
class ConflictError {
    name;
    message;
    constructor(message) {
        this.name = "ConflictError";
        this.message = message;
    }
}
export { conflict, ConflictError };

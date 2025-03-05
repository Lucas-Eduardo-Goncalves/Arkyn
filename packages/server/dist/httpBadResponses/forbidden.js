function forbidden(error) {
    return Response.json({
        status: 403,
        success: false,
        name: error.name,
        message: error.message,
    }, { status: 403 });
}
class ForbiddenError {
    name;
    message;
    constructor(message) {
        this.name = "ForbiddenError";
        this.message = message;
    }
}
export { forbidden, ForbiddenError };

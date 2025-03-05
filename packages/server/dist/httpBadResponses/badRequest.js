function badRequest(error) {
    return Response.json({
        status: 400,
        success: false,
        name: error.name,
        message: error.message,
    }, { status: 400 });
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

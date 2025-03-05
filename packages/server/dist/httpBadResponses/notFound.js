function notFound(error) {
    return Response.json({
        status: 404,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    }, { status: 404 });
}
class NotFoundError {
    name;
    message;
    constructor(message) {
        this.name = "NotFoundError";
        this.message = message;
    }
}
export { notFound, NotFoundError };

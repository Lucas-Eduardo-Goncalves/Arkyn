function serverError(error) {
    return Response.json({
        status: 500,
        success: false,
        name: error.name,
        message: error.message,
        cause: error.cause,
    }, { status: 500 });
}
class ServerError {
    name;
    message;
    constructor(message) {
        this.name = "ServerError";
        this.message = message;
    }
}
export { serverError, ServerError };

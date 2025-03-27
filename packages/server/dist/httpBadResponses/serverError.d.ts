declare function serverError(error: ServerError): Response;
declare class ServerError {
    name: string;
    message: string;
    cause: any;
    constructor(message: string, cause?: any);
}
export { serverError, ServerError };
//# sourceMappingURL=serverError.d.ts.map
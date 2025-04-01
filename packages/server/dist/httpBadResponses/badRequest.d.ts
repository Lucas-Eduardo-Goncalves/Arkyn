declare function badRequest(error: BadRequestError): Response;
declare class BadRequestError {
    name: string;
    message: string;
    cause?: any;
    constructor(message: string, cause?: any);
}
export { badRequest, BadRequestError };
//# sourceMappingURL=badRequest.d.ts.map
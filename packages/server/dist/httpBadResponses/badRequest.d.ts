declare function badRequest(error: BadRequestError): Response;
declare class BadRequestError {
    name: string;
    message: string;
    constructor(message: string);
}
export { badRequest, BadRequestError };
//# sourceMappingURL=badRequest.d.ts.map
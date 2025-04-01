declare function forbidden(error: ForbiddenError): Response;
declare class ForbiddenError {
    name: string;
    message: string;
    cause?: any;
    constructor(message: string, cause?: any);
}
export { forbidden, ForbiddenError };
//# sourceMappingURL=forbidden.d.ts.map
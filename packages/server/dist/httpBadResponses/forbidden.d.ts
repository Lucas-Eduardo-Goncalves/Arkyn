declare function forbidden(error: ForbiddenError): Response;
declare class ForbiddenError {
    name: string;
    message: string;
    constructor(message: string);
}
export { forbidden, ForbiddenError };
//# sourceMappingURL=forbidden.d.ts.map
declare function unauthorized(error: UnauthorizedError): Response;
declare class UnauthorizedError {
    name: string;
    message: string;
    cause?: any;
    constructor(message: string, cause?: any);
}
export { unauthorized, UnauthorizedError };
//# sourceMappingURL=unauthorized.d.ts.map
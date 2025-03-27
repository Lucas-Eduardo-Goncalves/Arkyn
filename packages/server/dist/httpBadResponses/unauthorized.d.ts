declare function unauthorized(error: UnauthorizedError): Response;
declare class UnauthorizedError {
    name: string;
    message: string;
    constructor(message: string);
}
export { unauthorized, UnauthorizedError };
//# sourceMappingURL=unauthorized.d.ts.map
declare function unauthorized(error: Error): import("undici-types").Response;
declare class UnauthorizedError {
    name: string;
    message: string;
    constructor(message: string);
}
export { unauthorized, UnauthorizedError };
//# sourceMappingURL=unauthorized.d.ts.map
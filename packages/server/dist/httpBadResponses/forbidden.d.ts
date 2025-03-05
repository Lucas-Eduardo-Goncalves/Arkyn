declare function forbidden(error: ForbiddenError): import("undici-types").Response;
declare class ForbiddenError {
    name: string;
    message: string;
    constructor(message: string);
}
export { forbidden, ForbiddenError };
//# sourceMappingURL=forbidden.d.ts.map
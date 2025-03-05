declare function forbidden(error: Error): import("undici-types").Response;
declare class ForbiddenError {
    name: string;
    message: string;
    constructor(message: string);
}
export { forbidden, ForbiddenError };
//# sourceMappingURL=forbidden.d.ts.map
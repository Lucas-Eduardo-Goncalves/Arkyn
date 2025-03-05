declare function serverError(error: Error): import("undici-types").Response;
declare class ServerError {
    name: string;
    message: string;
    constructor(message: string);
}
export { serverError, ServerError };
//# sourceMappingURL=serverError.d.ts.map
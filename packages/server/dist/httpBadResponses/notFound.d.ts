declare function notFound(error: Error): import("undici-types").Response;
declare class NotFoundError {
    name: string;
    message: string;
    constructor(message: string);
}
export { notFound, NotFoundError };
//# sourceMappingURL=notFound.d.ts.map
declare function conflict(error: Error): import("undici-types").Response;
declare class ConflictError {
    name: string;
    message: string;
    constructor(message: string);
}
export { conflict, ConflictError };
//# sourceMappingURL=conflict.d.ts.map
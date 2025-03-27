declare function conflict(error: ConflictError): Response;
declare class ConflictError {
    name: string;
    message: string;
    constructor(message: string);
}
export { conflict, ConflictError };
//# sourceMappingURL=conflict.d.ts.map
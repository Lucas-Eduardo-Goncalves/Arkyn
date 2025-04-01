declare function conflict(error: ConflictError): Response;
declare class ConflictError {
    name: string;
    message: string;
    cause?: any;
    constructor(message: string, cause?: any);
}
export { conflict, ConflictError };
//# sourceMappingURL=conflict.d.ts.map
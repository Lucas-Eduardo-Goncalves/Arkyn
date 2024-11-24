import type { HttpResponse } from "@arkyn/types";
declare function conflict(error: Error): HttpResponse;
declare class ConflictError extends Error {
    constructor(message: string);
}
export { conflict, ConflictError };
//# sourceMappingURL=conflict.d.ts.map
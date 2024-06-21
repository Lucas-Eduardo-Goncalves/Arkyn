import type { HttpResponse } from "@arkyn/types";
declare function serverError(error: Error): HttpResponse;
declare class ServerError extends Error {
    constructor(message: string);
}
export { serverError, ServerError };
//# sourceMappingURL=serverError.d.ts.map
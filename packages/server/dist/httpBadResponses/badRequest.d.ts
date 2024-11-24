import type { HttpResponse } from "@arkyn/types";
declare function badRequest(error: Error): HttpResponse;
declare class BadRequestError extends Error {
    constructor(message: string);
}
export { badRequest, BadRequestError };
//# sourceMappingURL=badRequest.d.ts.map
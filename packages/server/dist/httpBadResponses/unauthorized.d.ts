import type { HttpResponse } from "@arkyn/types";
declare function unauthorized(error: Error): HttpResponse;
declare class UnauthorizedError extends Error {
    constructor(message: string);
}
export { unauthorized, UnauthorizedError };
//# sourceMappingURL=unauthorized.d.ts.map
import type { HttpResponse } from "@arkyn/types";
declare function forbidden(error: Error): HttpResponse;
declare class ForbiddenError extends Error {
    constructor(message: string);
}
export { forbidden, ForbiddenError };
//# sourceMappingURL=forbidden.d.ts.map
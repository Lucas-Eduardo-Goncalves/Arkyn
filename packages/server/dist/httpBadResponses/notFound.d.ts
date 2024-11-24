import type { HttpResponse } from "@arkyn/types";
declare function notFound(error: Error): HttpResponse;
declare class NotFoundError extends Error {
    constructor(message: string);
}
export { notFound, NotFoundError };
//# sourceMappingURL=notFound.d.ts.map
import type { HttpDataResponse } from "@arkyn/types";
type UnprocessableEntityErrorProps = {
    data?: any;
    fieldErrors?: Record<string, string>;
    fields?: Record<string, string>;
    message?: string;
};
declare function unprocessableEntity(error: UnprocessableEntityError): HttpDataResponse;
declare class UnprocessableEntityError extends Error {
    fieldErrors: any;
    fields: any;
    data: any;
    constructor(data: UnprocessableEntityErrorProps);
}
export { unprocessableEntity, UnprocessableEntityError };
//# sourceMappingURL=unprocessableEntity.d.ts.map
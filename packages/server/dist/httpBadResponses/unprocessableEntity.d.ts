type UnprocessableEntityErrorProps = {
    data?: any;
    fieldErrors?: Record<string, string>;
    fields?: Record<string, string>;
    message?: string;
};
declare function unprocessableEntity(error: UnprocessableEntityError): Response;
declare class UnprocessableEntityError {
    name: string;
    message?: string;
    fieldErrors: any;
    fields: any;
    data: any;
    constructor(data: UnprocessableEntityErrorProps);
}
export { unprocessableEntity, UnprocessableEntityError };
//# sourceMappingURL=unprocessableEntity.d.ts.map
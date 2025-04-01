declare function notFound(error: NotFoundError): Response;
declare class NotFoundError {
    name: string;
    message: string;
    cause?: any;
    constructor(message: string, cause?: any);
}
export { notFound, NotFoundError };
//# sourceMappingURL=notFound.d.ts.map
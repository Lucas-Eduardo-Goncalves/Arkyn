declare function notFound(error: NotFoundError): Response;
declare class NotFoundError {
    name: string;
    message: string;
    constructor(message: string);
}
export { notFound, NotFoundError };
//# sourceMappingURL=notFound.d.ts.map
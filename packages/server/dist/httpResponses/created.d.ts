declare function created(body: any, init?: ResponseInit): Response;
declare class Created<T> {
    body: T;
    init: ResponseInit;
    constructor(body: T, init?: ResponseInit);
    response(): Response;
    json(): Promise<any>;
}
export { created, Created };
//# sourceMappingURL=created.d.ts.map
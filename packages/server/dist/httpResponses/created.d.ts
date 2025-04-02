declare function created(body: any, init?: ResponseInit): Response;
declare class Created<T> {
    body: T;
    init: ResponseInit;
    constructor(body: T, init?: ResponseInit);
    json(): Response;
}
export { created, Created };
//# sourceMappingURL=created.d.ts.map
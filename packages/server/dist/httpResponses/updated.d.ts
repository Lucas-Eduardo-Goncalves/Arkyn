declare function updated(body: any, init?: ResponseInit): Response;
declare class Updated<T> {
    body: T;
    init: ResponseInit;
    constructor(body: T, init?: ResponseInit);
    json(): Response;
}
export { updated, Updated };
//# sourceMappingURL=updated.d.ts.map
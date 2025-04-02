declare function success(body: any, init?: ResponseInit): Response;
declare class Success<T> {
    body: T;
    init: ResponseInit;
    constructor(body: T, init?: ResponseInit);
    response(): Response;
    json(): Promise<any>;
}
export { success, Success };
//# sourceMappingURL=success.d.ts.map
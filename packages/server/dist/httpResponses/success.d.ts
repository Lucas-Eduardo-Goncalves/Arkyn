declare function success(body: any, init?: ResponseInit): Response;
declare class Success<T> {
    body: T;
    init: ResponseInit;
    constructor(body: T, init?: ResponseInit);
    json(): Response;
}
export { success, Success };
//# sourceMappingURL=success.d.ts.map
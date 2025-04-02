declare function noContent(init?: ResponseInit): Response;
declare class NoContent {
    init: ResponseInit;
    constructor(init?: ResponseInit);
    response(): Response;
    json(): Promise<any>;
}
export { noContent, NoContent };
//# sourceMappingURL=noContent.d.ts.map
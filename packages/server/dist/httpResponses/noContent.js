function noContent(init) {
    return new Response(null, {
        ...init,
        status: 200,
        headers: { "Content-Type": "application/json", ...init?.headers },
    });
}
class NoContent {
    init;
    constructor(init) {
        this.init = init || {};
    }
}
export { noContent, NoContent };

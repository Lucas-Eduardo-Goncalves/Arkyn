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
    json() {
        return new Response(null, {
            ...this.init,
            status: 200,
            headers: { "Content-Type": "application/json", ...this.init.headers },
        });
    }
}
export { noContent, NoContent };

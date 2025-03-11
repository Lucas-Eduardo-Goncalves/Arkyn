function updated(body, init) {
    return new Response(JSON.stringify(body), {
        ...init,
        status: 200,
        headers: { "Content-Type": "application/json", ...init?.headers },
    });
}
class Updated {
    body;
    init;
    constructor(body, init) {
        this.body = body;
        this.init = init || {};
    }
}
export { updated, Updated };

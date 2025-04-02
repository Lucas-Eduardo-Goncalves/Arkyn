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
    json() {
        return new Response(JSON.stringify(this.body), {
            ...this.init,
            status: 200,
            headers: { "Content-Type": "application/json", ...this.init.headers },
        });
    }
}
export { updated, Updated };

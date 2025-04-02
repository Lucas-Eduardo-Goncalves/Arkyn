function success(body, init) {
    return new Response(JSON.stringify(body), {
        ...init,
        status: 200,
        headers: { "Content-Type": "application/json", ...init?.headers },
    });
}
class Success {
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
export { success, Success };

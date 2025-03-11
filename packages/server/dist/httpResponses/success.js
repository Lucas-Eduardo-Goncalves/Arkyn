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
}
export { success, Success };

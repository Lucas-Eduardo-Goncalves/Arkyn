function success(body, init) {
    return Response.json(body, { ...init, status: 200 });
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

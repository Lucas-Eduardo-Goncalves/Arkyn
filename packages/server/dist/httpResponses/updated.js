function updated(body, init) {
    return Response.json(body, { ...init, status: 200 });
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

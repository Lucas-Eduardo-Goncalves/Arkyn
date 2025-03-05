function created(body, init) {
    return Response.json(body, { ...init, status: 201 });
}
class Created {
    body;
    init;
    constructor(body, init) {
        this.body = body;
        this.init = init || {};
    }
}
export { created, Created };

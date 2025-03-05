function noContent(init) {
    return new Response(null, { ...init, status: 200 });
}
class NoContent {
    init;
    constructor(init) {
        this.init = init || {};
    }
}
export { noContent, NoContent };

class Created extends Response {
    constructor(body, init) {
        super(body, { ...init, status: 201 });
        this.headers.set("Content-Type", "application/json");
    }
}
export { Created };

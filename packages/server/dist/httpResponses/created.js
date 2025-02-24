class Created extends Response {
    constructor(body, init) {
        super(body, {
            ...init,
            status: 201,
            headers: {
                "Content-Type": "application/json",
                ...init?.headers,
            },
        });
    }
}
export { Created };

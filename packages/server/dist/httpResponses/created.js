class Created extends Response {
    constructor(body, init) {
        super(JSON.stringify(body), {
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

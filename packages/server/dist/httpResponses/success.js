class Success extends Response {
    constructor(body, init) {
        super(body, {
            ...init,
            status: 200,
            headers: {
                "Content-Type": "application/json",
                ...init?.headers,
            },
        });
    }
}
export { Success };

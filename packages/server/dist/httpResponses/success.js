class Success extends Response {
    constructor(body, init) {
        super(JSON.stringify(body), {
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

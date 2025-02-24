class Created extends Response {
  constructor(body?: any, init?: ResponseInit) {
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

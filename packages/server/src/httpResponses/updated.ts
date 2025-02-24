class Updated extends Response {
  constructor(body?: any, init?: ResponseInit) {
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

export { Updated };

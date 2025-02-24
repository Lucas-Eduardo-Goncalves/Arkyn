class Created extends Response {
  constructor(body?: any, init?: ResponseInit) {
    super(body, { ...init, status: 201 });
    this.headers.set("Content-Type", "application/json");
  }
}

export { Created };

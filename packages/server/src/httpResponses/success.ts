class Success extends Response {
  constructor(body?: any, init?: ResponseInit) {
    super(body, { ...init, status: 200 });
    this.headers.set("Content-Type", "application/json");
  }
}

export { Success };

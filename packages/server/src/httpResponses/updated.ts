function updated(body: any, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    status: 200,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

class Updated<T> {
  body: T;
  init: ResponseInit;

  constructor(body: T, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }

  json(): Response {
    return new Response(JSON.stringify(this.body), {
      ...this.init,
      status: 200,
      headers: { "Content-Type": "application/json", ...this.init.headers },
    });
  }
}

export { updated, Updated };

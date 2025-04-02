function success(body: any, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    status: 200,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

class Success<T> {
  body: T;
  init: ResponseInit;

  constructor(body: T, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }

  response(): Response {
    return new Response(JSON.stringify(this.body), {
      ...this.init,
      status: 200,
      headers: { "Content-Type": "application/json", ...this.init.headers },
    });
  }
}

export { success, Success };

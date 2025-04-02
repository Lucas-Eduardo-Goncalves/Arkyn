function created(body: any, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    status: 201,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

class Created<T> {
  body: T;
  init: ResponseInit;

  constructor(body: T, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }
}

export { created, Created };

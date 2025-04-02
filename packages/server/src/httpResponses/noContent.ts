function noContent(init?: ResponseInit): Response {
  return new Response(null, {
    ...init,
    status: 200,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

class NoContent {
  init: ResponseInit;

  constructor(init?: ResponseInit) {
    this.init = init || {};
  }

  response(): Response {
    return new Response(null, {
      ...this.init,
      status: 200,
      headers: { "Content-Type": "application/json", ...this.init.headers },
    });
  }
}

export { noContent, NoContent };

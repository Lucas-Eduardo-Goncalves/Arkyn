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
}

export { noContent, NoContent };

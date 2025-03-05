function noContent(init?: ResponseInit): Response {
  return new Response(null, { ...init, status: 200 });
}

class NoContent {
  init: ResponseInit;

  constructor(init?: ResponseInit) {
    this.init = init || {};
  }
}

export { noContent, NoContent };

function updated(body: any, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    status: 200,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

class Updated {
  body: any;
  init: ResponseInit;

  constructor(body: any, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }
}

export { updated, Updated };

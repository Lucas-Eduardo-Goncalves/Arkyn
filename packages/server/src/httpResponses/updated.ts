function updated(body: any, init?: ResponseInit): Response {
  return Response.json(body, { ...init, status: 200 });
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

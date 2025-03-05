function created(body: any, init?: ResponseInit): Response {
  return Response.json(body, { ...init, status: 201 });
}

class Created {
  body: any;
  init: ResponseInit;

  constructor(body: any, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }
}

export { created, Created };

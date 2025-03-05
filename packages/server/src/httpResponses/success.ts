function success(body: any, init?: ResponseInit): Response {
  return Response.json(body, { ...init, status: 200 });
}

class Success {
  body: any;
  init: ResponseInit;

  constructor(body: any, init?: ResponseInit) {
    this.body = body;
    this.init = init || {};
  }
}

export { success, Success };

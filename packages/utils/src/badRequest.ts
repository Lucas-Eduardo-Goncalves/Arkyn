import { json } from "@remix-run/node";

function badRequest<T>(data: T, status?: number) {
  return json<T>(data, { status: status || 400 });
}

export { badRequest };

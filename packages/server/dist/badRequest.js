import { json } from "@remix-run/node";
function badRequest(data, status) {
    return json(data, { status: status || 400 });
}
export { badRequest };

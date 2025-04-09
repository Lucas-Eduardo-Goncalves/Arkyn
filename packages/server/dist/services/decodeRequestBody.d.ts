import type { DecodeRequestBodyFunction } from "@arkyn/types";
/**
 * Decodes the body of an incoming request into a JavaScript object.
 *
 * This function attempts to parse the request body in the following order:
 * 1. Tries to parse the body as JSON.
 * 2. If JSON parsing fails, attempts to parse the body as URL-encoded form data.
 * 3. If both parsing attempts fail, logs the errors and returns an empty object.
 *
 * @param req - The incoming request object containing the body to decode.
 * @returns A promise that resolves to the decoded data as a JavaScript object.
 *
 * @throws Logs errors to the console if the request body cannot be read or parsed.
 */
declare const decodeRequestBody: DecodeRequestBodyFunction;
export { decodeRequestBody };
//# sourceMappingURL=decodeRequestBody.d.ts.map
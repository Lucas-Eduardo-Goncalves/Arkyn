/**
 * Handles errors and converts them into appropriate HTTP responses.
 *
 * This function takes an error object and determines its type to return
 * the corresponding HTTP response. It supports both success and error
 * response types, converting them into a standardized format using the
 * `toResponse` method when applicable.
 *
 * @param error - The error object to handle. It can be an instance of various
 * HTTP response classes or a generic error.
 *
 * @returns The corresponding HTTP response object if the error matches a known
 * type, or `undefined` if no match is found.
 *
 * ### Supported Success Responses:
 * - `Found`
 * - `Created`
 * - `Updated`
 * - `Success`
 * - `NoContent`
 *
 * ### Supported Error Responses:
 * - `BadGateway`
 * - `BadRequest`
 * - `Conflict`
 * - `Forbidden`
 * - `NotFound`
 * - `NotImplemented`
 * - `ServerError`
 * - `Unauthorized`
 * - `UnprocessableEntity`
 *
 * ### Example Usage:
 * ```typescript
 * try {
 *   // Some operation that might throw an error
 * } catch (error) {
 *   return errorHandler(error);
 * }
 * ```
 */
declare function errorHandler(error: any): Response;
export { errorHandler };
//# sourceMappingURL=errorHandler.d.ts.map
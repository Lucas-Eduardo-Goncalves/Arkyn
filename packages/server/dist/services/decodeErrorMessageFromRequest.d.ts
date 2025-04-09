/**
 * Decodes an error message from a given request data object or response object.
 *
 * This function attempts to extract a meaningful error message from the provided
 * `data` or `response` objects by checking various properties in a specific order.
 * If no valid error message is found, it returns a default message: "Missing error message".
 *
 * @param data - The data object that may contain error information. It can have properties
 * such as `message`, `error`, or `error.message` that are checked for a string value.
 * @param response - The response object that may contain a `statusText` property
 * representing the HTTP status text.
 * @returns A string representing the decoded error message, or a default message
 * if no error message is found.
 */
declare function decodeErrorMessageFromRequest(data: any, response: Response): string;
export { decodeErrorMessageFromRequest };
//# sourceMappingURL=decodeErrorMessageFromRequest.d.ts.map
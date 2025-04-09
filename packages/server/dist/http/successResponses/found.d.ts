/**
 * Represents an HTTP 302 Found response.
 * This class is used to create a standardized HTTP response with a status of 302 (Found),
 * including optional headers and a response body.
 *
 * @template T - The type of the response body.
 */
declare class Found<T> {
    body: T;
    headers: ResponseInit["headers"];
    status: number;
    statusText: string;
    /**
     * Creates an instance of the `Found` class.
     *
     * @param body - The body of the response.
     * @param init - Optional initialization object to set headers, status, and statusText.
     *   - `headers`: Additional headers to include in the response.
     *   - `status`: HTTP status code (default is 302).
     *   - `statusText`: HTTP status text (default is "Found").
     */
    constructor(body: T, init?: ResponseInit);
    /**
     * Converts the `Found` instance into a `Response` object.
     * This method serializes the response body as JSON and includes the appropriate headers.
     *
     * @returns A `Response` object with the serialized JSON body and the specified headers, status, and statusText.
     */
    toResponse(): Response;
    /**
     * Converts the `Found` instance into a JSON response using `Response.json`.
     * This method is an alternative to `toResponse` for creating JSON responses.
     *
     * @returns A `Response` object with the JSON body and the specified headers, status, and statusText.
     */
    toJson(): Response;
}
export { Found };
//# sourceMappingURL=found.d.ts.map
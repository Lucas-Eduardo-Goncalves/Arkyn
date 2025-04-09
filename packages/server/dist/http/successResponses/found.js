/**
 * Represents an HTTP 302 Found response.
 * This class is used to create a standardized HTTP response with a status of 302 (Found),
 * including optional headers and a response body.
 *
 * @template T - The type of the response body.
 */
class Found {
    body;
    headers;
    status;
    statusText;
    /**
     * Creates an instance of the `Found` class.
     *
     * @param body - The body of the response.
     * @param init - Optional initialization object to set headers, status, and statusText.
     *   - `headers`: Additional headers to include in the response.
     *   - `status`: HTTP status code (default is 302).
     *   - `statusText`: HTTP status text (default is "Found").
     */
    constructor(body, init) {
        this.body = body;
        this.headers = init?.headers || {};
        this.status = init?.status || 302;
        this.statusText = init?.statusText || "Found";
    }
    /**
     * Converts the `Found` instance into a `Response` object.
     * This method serializes the response body as JSON and includes the appropriate headers.
     *
     * @returns A `Response` object with the serialized JSON body and the specified headers, status, and statusText.
     */
    toResponse() {
        const responseInit = {
            headers: { "Content-Type": "application/json", ...this.headers },
            status: this.status,
            statusText: this.statusText,
        };
        return new Response(JSON.stringify(this.body), responseInit);
    }
    /**
     * Converts the `Found` instance into a JSON response using `Response.json`.
     * This method is an alternative to `toResponse` for creating JSON responses.
     *
     * @returns A `Response` object with the JSON body and the specified headers, status, and statusText.
     */
    toJson() {
        const responseInit = {
            headers: this.headers,
            status: this.status,
            statusText: this.statusText,
        };
        return Response.json(this.body, responseInit);
    }
}
export { Found };

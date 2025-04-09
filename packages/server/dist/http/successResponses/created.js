/**
 * Represents a successful HTTP response with a status code of 201 (Created).
 * This class is used to standardize the structure of a "Created" response,
 * including the response body, headers, status, and status text.
 *
 * @template T - The type of the response body.
 */
class Created {
    body;
    headers;
    status;
    statusText;
    /**
     * Creates an instance of the `Created` class.
     *
     * @param body - The response body to be included in the HTTP response.
     * @param init - Optional initialization object for customizing headers, status, and status text.
     */
    constructor(body, init) {
        this.body = body;
        this.headers = init?.headers || {};
        this.status = init?.status || 201;
        this.statusText = init?.statusText || "Resource created successfully";
    }
    /**
     * Converts the `Created` instance into a `Response` object with a JSON body.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with the serialized JSON body and response metadata.
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
     * Converts the `Created` instance into a `Response` object using the `Response.json` method.
     * This method is an alternative to `toResponse` for generating JSON responses.
     *
     * @returns A `Response` object with the JSON body and response metadata.
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
export { Created };

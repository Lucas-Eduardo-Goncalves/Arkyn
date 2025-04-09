/**
 * Represents a successful HTTP response with a status code of 204 (No Content).
 * This class is used to standardize the structure of a "No Content" response,
 * including headers, status, and status text.
 */
class NoContent {
    headers;
    status;
    statusText;
    /**
     * Creates an instance of the `NoContent` class.
     *
     * @param init - Optional initialization object for customizing headers, status, and status text.
     */
    constructor(init) {
        this.headers = init?.headers || {};
        this.status = init?.status || 204;
        this.statusText = init?.statusText ?? "No content";
    }
    /**
     * Converts the `NoContent` instance into a `Response` object.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with no body and response metadata.
     */
    toResponse() {
        const responseInit = {
            headers: this.headers,
            status: this.status,
            statusText: this.statusText,
        };
        return new Response(null, responseInit);
    }
}
export { NoContent };

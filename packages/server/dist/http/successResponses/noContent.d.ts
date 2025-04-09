/**
 * Represents a successful HTTP response with a status code of 204 (No Content).
 * This class is used to standardize the structure of a "No Content" response,
 * including headers, status, and status text.
 */
declare class NoContent {
    headers: ResponseInit["headers"];
    status: number;
    statusText: string;
    /**
     * Creates an instance of the `NoContent` class.
     *
     * @param init - Optional initialization object for customizing headers, status, and status text.
     */
    constructor(init?: ResponseInit);
    /**
     * Converts the `NoContent` instance into a `Response` object.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with no body and response metadata.
     */
    toResponse(): Response;
}
export { NoContent };
//# sourceMappingURL=noContent.d.ts.map
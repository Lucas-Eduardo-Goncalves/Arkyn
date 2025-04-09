/**
 * Represents a successful HTTP response with a status code of 200 (OK).
 * This class is used to standardize the structure of a "Success" response,
 * including the response body, headers, status, and status text.
 *
 * @template T - The type of the response body.
 */
declare class Success<T> {
    body: T;
    headers: ResponseInit["headers"];
    status: number;
    statusText: string;
    /**
     * Creates an instance of the `Success` class.
     *
     * @param body - The response body to be included in the HTTP response.
     * @param init - Optional initialization object for customizing headers, status, and status text.
     */
    constructor(body: T, init?: ResponseInit);
    /**
     * Converts the `Success` instance into a `Response` object with a JSON body.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with the serialized JSON body and response metadata.
     */
    toResponse(): Response;
    /**
     * Converts the `Success` instance into a `Response` object using the `Response.json` method.
     * This method is an alternative to `toResponse` for generating JSON responses.
     *
     * @returns A `Response` object with the JSON body and response metadata.
     */
    toJson(): Response;
}
export { Success };
//# sourceMappingURL=success.d.ts.map
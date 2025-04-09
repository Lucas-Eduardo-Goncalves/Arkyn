/**
 * Represents an HTTP error response with a status code of 401 (Unauthorized).
 * This class is used to standardize the structure of an "Unauthorized" error response,
 * including the response body, headers, status, and status text.
 */
declare class Unauthorized {
    body: any;
    cause?: any;
    status: number;
    statusText: string;
    /**
     * Creates an instance of the `Unauthorized` class.
     *
     * @param message - A descriptive message explaining why the request is unauthorized.
     * @param cause - Optional additional information about the cause of the error.
     */
    constructor(message: string, cause?: any);
    /**
     * Converts the `Unauthorized` instance into a `Response` object with a JSON body.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with the serialized JSON body and response metadata.
     */
    toResponse(): Response;
    /**
     * Converts the `Unauthorized` instance into a `Response` object using the `Response.json` method.
     * This method is an alternative to `toResponse` for generating JSON error responses.
     *
     * @returns A `Response` object with the JSON body and response metadata.
     */
    toJson(): Response;
}
export { Unauthorized };
//# sourceMappingURL=unauthorized.d.ts.map
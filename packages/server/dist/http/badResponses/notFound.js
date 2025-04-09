import { httpDebug } from "../../services/httpDebug";
/**
 * Represents an HTTP error response with a status code of 404 (Not Found).
 * This class is used to standardize the structure of a "Not Found" error response,
 * including the response body, headers, status, and status text.
 */
class NotFound {
    body;
    cause;
    status = 404;
    statusText;
    /**
     * Creates an instance of the `NotFound` class.
     *
     * @param message - A descriptive message explaining the reason the resource was not found.
     * @param cause - Optional additional information about the cause of the error.
     */
    constructor(message, cause) {
        this.body = { name: "NotFound", message: message };
        this.statusText = message;
        this.cause = cause ? JSON.stringify(cause) : undefined;
        httpDebug("NotFound", this.body, this.cause);
    }
    /**
     * Converts the `NotFound` instance into a `Response` object with a JSON body.
     * This method ensures the response has the appropriate headers, status, and status text.
     *
     * @returns A `Response` object with the serialized JSON body and response metadata.
     */
    toResponse() {
        const responseInit = {
            headers: { "Content-Type": "application/json" },
            status: this.status,
            statusText: this.statusText,
        };
        return new Response(JSON.stringify(this.body), responseInit);
    }
    /**
     * Converts the `NotFound` instance into a `Response` object using the `Response.json` method.
     * This method is an alternative to `toResponse` for generating JSON error responses.
     *
     * @returns A `Response` object with the JSON body and response metadata.
     */
    toJson() {
        const responseInit = {
            status: this.status,
            statusText: this.statusText,
        };
        return Response.json(this.body, responseInit);
    }
}
export { NotFound };

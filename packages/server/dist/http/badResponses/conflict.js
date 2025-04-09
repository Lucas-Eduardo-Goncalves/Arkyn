import { httpDebug } from "../../services/httpDebug";
/**
 * Represents an HTTP error response with a status code of 409 (Conflict).
 * This class is used to standardize the structure of a "Conflict" error response,
 * including the response body, headers, status, and status text.
 */
class Conflict {
    body;
    cause;
    status = 409;
    statusText;
    /**
     * Creates an instance of the `Conflict` class.
     *
     * @param message - A descriptive message explaining the cause of the conflict.
     * @param cause - Optional additional information about the cause of the conflict.
     */
    constructor(message, cause) {
        this.body = { name: "Conflict", message: message };
        this.statusText = message;
        this.cause = cause ? JSON.stringify(cause) : undefined;
        httpDebug("Conflict", this.body, this.cause);
    }
    /**
     * Converts the `Conflict` instance into a `Response` object with a JSON body.
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
     * Converts the `Conflict` instance into a `Response` object using the `Response.json` method.
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
export { Conflict };

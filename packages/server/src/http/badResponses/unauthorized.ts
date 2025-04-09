import { httpDebug } from "../../services/httpDebug";

/**
 * Represents an HTTP error response with a status code of 401 (Unauthorized).
 * This class is used to standardize the structure of an "Unauthorized" error response,
 * including the response body, headers, status, and status text.
 */

class Unauthorized {
  body: any;
  cause?: any;
  status: number = 401;
  statusText: string;

  /**
   * Creates an instance of the `Unauthorized` class.
   *
   * @param message - A descriptive message explaining why the request is unauthorized.
   * @param cause - Optional additional information about the cause of the error.
   */

  constructor(message: string, cause?: any) {
    this.body = { name: "Unauthorized", message: message };
    this.statusText = message;
    this.cause = cause ? JSON.stringify(cause) : undefined;
    httpDebug("Unauthorized", this.body, this.cause);
  }

  /**
   * Converts the `Unauthorized` instance into a `Response` object with a JSON body.
   * This method ensures the response has the appropriate headers, status, and status text.
   *
   * @returns A `Response` object with the serialized JSON body and response metadata.
   */

  toResponse(): Response {
    const responseInit: ResponseInit = {
      headers: { "Content-Type": "application/json" },
      status: this.status,
      statusText: this.statusText,
    };

    return new Response(JSON.stringify(this.body), responseInit);
  }

  /**
   * Converts the `Unauthorized` instance into a `Response` object using the `Response.json` method.
   * This method is an alternative to `toResponse` for generating JSON error responses.
   *
   * @returns A `Response` object with the JSON body and response metadata.
   */

  toJson(): Response {
    const responseInit: ResponseInit = {
      status: this.status,
      statusText: this.statusText,
    };

    return Response.json(this.body, responseInit);
  }
}

export { Unauthorized };

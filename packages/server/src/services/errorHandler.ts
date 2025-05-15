import { BadGateway } from "../http/badResponses/badGateway";
import { BadRequest } from "../http/badResponses/badRequest";
import { Conflict } from "../http/badResponses/conflict";
import { Forbidden } from "../http/badResponses/forbidden";
import { NotFound } from "../http/badResponses/notFound";
import { NotImplemented } from "../http/badResponses/notImplemented";
import { ServerError } from "../http/badResponses/serverError";
import { Unauthorized } from "../http/badResponses/unauthorized";
import { UnprocessableEntity } from "../http/badResponses/unprocessableEntity";

import { Created } from "../http/successResponses/created";
import { Found } from "../http/successResponses/found";
import { NoContent } from "../http/successResponses/noContent";
import { Success } from "../http/successResponses/success";
import { Updated } from "../http/successResponses/updated";

/**
 * Handles errors and converts them into appropriate HTTP responses.
 *
 * This function takes an error object and determines its type to return
 * the corresponding HTTP response. It supports both success and error
 * response types, converting them into a standardized format using the
 * `toResponse` method when applicable.
 *
 * @param error - The error object to handle. It can be an instance of various
 * HTTP response classes or a generic error.
 *
 * @returns The corresponding HTTP response object if the error matches a known
 * type, or `undefined` if no match is found.
 *
 * ### Supported Success Responses:
 * - `Found`
 * - `Created`
 * - `Updated`
 * - `Success`
 * - `NoContent`
 *
 * ### Supported Error Responses:
 * - `BadGateway`
 * - `BadRequest`
 * - `Conflict`
 * - `Forbidden`
 * - `NotFound`
 * - `NotImplemented`
 * - `ServerError`
 * - `Unauthorized`
 * - `UnprocessableEntity`
 *
 * ### Example Usage:
 * ```typescript
 * try {
 *   // Some operation that might throw an error
 * } catch (error) {
 *   return errorHandler(error);
 * }
 * ```
 */

function errorHandler(error: any): Response {
  switch (true) {
    case error instanceof Response:
      return error;
    case error instanceof Found:
      return error.toResponse();
    case error instanceof Created:
      return error.toResponse();
    case error instanceof Updated:
      return error.toResponse();
    case error instanceof Success:
      return error.toResponse();
    case error instanceof NoContent:
      return error.toResponse();
  }

  switch (true) {
    case error instanceof BadGateway:
      return error.toResponse();
    case error instanceof BadRequest:
      return error.toResponse();
    case error instanceof Conflict:
      return error.toResponse();
    case error instanceof Forbidden:
      return error.toResponse();
    case error instanceof NotFound:
      return error.toResponse();
    case error instanceof NotImplemented:
      return error.toResponse();
    case error instanceof ServerError:
      return error.toResponse();
    case error instanceof Unauthorized:
      return error.toResponse();
    case error instanceof UnprocessableEntity:
      return error.toResponse();
  }

  return new ServerError("Server error", error).toResponse();
}

export { errorHandler };

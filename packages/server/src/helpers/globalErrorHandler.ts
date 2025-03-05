import { badRequest, BadRequestError } from "../httpBadResponses/badRequest";
import { conflict, ConflictError } from "../httpBadResponses/conflict";
import { forbidden, ForbiddenError } from "../httpBadResponses/forbidden";
import { notFound, NotFoundError } from "../httpBadResponses/notFound";
import { serverError } from "../httpBadResponses/serverError";
import {
  UnprocessableEntityError,
  unprocessableEntity,
} from "../httpBadResponses/unprocessableEntity";
import {
  unauthorized,
  UnauthorizedError,
} from "../httpBadResponses/unauthorized";

const globalErrorHandler = (error: any) => {
  const showConsoleError =
    process.env.NODE_ENV === "development" ||
    process.env?.SHOW_ERRORS_IN_CONSOLE === "true";

  if (showConsoleError) console.error(error);

  if (error instanceof Response) throw error;

  switch (true) {
    case error instanceof BadRequestError:
      return badRequest(error);
    case error instanceof ForbiddenError:
      return forbidden(error);
    case error instanceof ConflictError:
      return conflict(error);
    case error instanceof UnauthorizedError:
      return unauthorized(error);
    case error instanceof NotFoundError:
      return notFound(error);
    case error instanceof UnprocessableEntityError:
      return unprocessableEntity(error);
    default:
      return serverError({
        message: error?.message || "Server error | Message not found",
        name: "Server Error",
        cause: error,
      });
  }
};

export { globalErrorHandler };

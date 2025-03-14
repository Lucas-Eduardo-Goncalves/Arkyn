import { badRequest, BadRequestError } from "../httpBadResponses/badRequest";
import { conflict, ConflictError } from "../httpBadResponses/conflict";
import { forbidden, ForbiddenError } from "../httpBadResponses/forbidden";
import { notFound, NotFoundError } from "../httpBadResponses/notFound";
import { serverError } from "../httpBadResponses/serverError";
import { unauthorized, UnauthorizedError, } from "../httpBadResponses/unauthorized";
import { unprocessableEntity, UnprocessableEntityError, } from "../httpBadResponses/unprocessableEntity";
import { created, Created } from "../httpResponses/created";
import { noContent, NoContent } from "../httpResponses/noContent";
import { success, Success } from "../httpResponses/success";
import { updated, Updated } from "../httpResponses/updated";
const globalErrorHandler = (error) => {
    // If the error is not an instance of Error, return the response
    switch (true) {
        case error instanceof Response:
            return error;
        case error instanceof Created:
            return created(error.body, error.init);
        case error instanceof Updated:
            return updated(error.body, error.init);
        case error instanceof Success:
            return success(error.body, error.init);
        case error instanceof NoContent:
            return noContent(error.init);
    }
    const showConsoleError = process.env.NODE_ENV === "development" ||
        process.env?.SHOW_ERRORS_IN_CONSOLE === "true";
    // If showConsoleError is true, log the error to the console
    if (showConsoleError)
        console.error(error);
    // If the error is an instance of BadRequestError, ForbiddenError, ConflictError, UnauthorizedError, NotFoundError, or UnprocessableEntityError, return the error
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
                cause: error.cause || "Unknown",
            });
    }
};
export { globalErrorHandler };

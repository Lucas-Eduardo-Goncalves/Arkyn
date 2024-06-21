import { json } from "@remix-run/node";
import { badRequest, BadRequestError } from "../httpBadResponses/badRequest";
import { conflict, ConflictError } from "../httpBadResponses/conflict";
import { forbidden, ForbiddenError } from "../httpBadResponses/forbidden";
import { notFound, NotFoundError } from "../httpBadResponses/notFound";
import { serverError } from "../httpBadResponses/serverError";
import { UnprocessableEntityError, unprocessableEntity, } from "../httpBadResponses/unprocessableEntity";
import { unauthorized, UnauthorizedError, } from "../httpBadResponses/unauthorized";
const globalErrorHandler = (error) => {
    switch (true) {
        case error instanceof BadRequestError:
            return json(badRequest(error));
        case error instanceof ForbiddenError:
            return json(forbidden(error));
        case error instanceof ConflictError:
            return json(conflict(error));
        case error instanceof UnauthorizedError:
            return json(unauthorized(error));
        case error instanceof NotFoundError:
            return json(notFound(error));
        case error instanceof UnprocessableEntityError:
            return json(unprocessableEntity(error));
        default:
            return json(serverError({
                message: error?.message || "Server error | Message not found",
                name: "Server Error",
                cause: error,
            }));
    }
};
export { globalErrorHandler };

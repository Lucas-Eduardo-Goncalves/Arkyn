import { errorHandler } from "../errorHandler";
import { Found } from "../../http/successResponses/found";
import { Created } from "../../http/successResponses/created";
import { Updated } from "../../http/successResponses/updated";
import { Success } from "../../http/successResponses/success";
import { NoContent } from "../../http/successResponses/noContent";
import { BadGateway } from "../../http/badResponses/badGateway";
import { BadRequest } from "../../http/badResponses/badRequest";
import { Conflict } from "../../http/badResponses/conflict";
import { Forbidden } from "../../http/badResponses/forbidden";
import { NotFound } from "../../http/badResponses/notFound";
import { NotImplemented } from "../../http/badResponses/notImplemented";
import { ServerError } from "../../http/badResponses/serverError";
import { Unauthorized } from "../../http/badResponses/unauthorized";
import { UnprocessableEntity } from "../../http/badResponses/unprocessableEntity";
import { describe, expect, it } from "vitest";
describe("errorHandler", () => {
    describe("Success Responses", () => {
        it("should handle Found response", () => {
            const found = new Found("Resource found");
            const response = errorHandler(found);
            expect(response.status).toBe(found.toResponse().status);
            expect(response.statusText).toBe(found.toResponse().statusText);
        });
        it("should handle Created response", () => {
            const created = new Created("Resource created");
            const response = errorHandler(created);
            expect(response.status).toBe(created.toResponse().status);
            expect(response.statusText).toBe(created.toResponse().statusText);
        });
        it("should handle Updated response", () => {
            const updated = new Updated("Resource updated");
            const response = errorHandler(updated);
            expect(response.status).toBe(updated.toResponse().status);
            expect(response.statusText).toBe(updated.toResponse().statusText);
        });
        it("should handle Success response", () => {
            const success = new Success("Operation successful");
            const response = errorHandler(success);
            expect(response.status).toBe(success.toResponse().status);
            expect(response.statusText).toBe(success.toResponse().statusText);
        });
        it("should handle NoContent response", () => {
            const noContent = new NoContent();
            const response = errorHandler(noContent);
            expect(response.status).toBe(noContent.toResponse().status);
            expect(response.statusText).toBe(noContent.toResponse().statusText);
        });
    });
    describe("Error Responses", () => {
        it("should handle BadGateway error", () => {
            const badGateway = new BadGateway("Bad gateway error");
            const response = errorHandler(badGateway);
            expect(response.status).toBe(badGateway.toResponse().status);
            expect(response.statusText).toBe(badGateway.toResponse().statusText);
        });
        it("should handle BadRequest error", () => {
            const badRequest = new BadRequest("Bad request error");
            const response = errorHandler(badRequest);
            expect(response.status).toBe(badRequest.toResponse().status);
            expect(response.statusText).toBe(badRequest.toResponse().statusText);
        });
        it("should handle Conflict error", () => {
            const conflict = new Conflict("Conflict error");
            const response = errorHandler(conflict);
            expect(response.status).toBe(conflict.toResponse().status);
            expect(response.statusText).toBe(conflict.toResponse().statusText);
        });
        it("should handle Forbidden error", () => {
            const forbidden = new Forbidden("Forbidden error");
            const response = errorHandler(forbidden);
            expect(response.status).toBe(forbidden.toResponse().status);
            expect(response.statusText).toBe(forbidden.toResponse().statusText);
        });
        it("should handle NotFound error", () => {
            const notFound = new NotFound("Not found error");
            const response = errorHandler(notFound);
            expect(response.status).toBe(notFound.toResponse().status);
            expect(response.statusText).toBe(notFound.toResponse().statusText);
        });
        it("should handle NotImplemented error", () => {
            const notImplemented = new NotImplemented("Not implemented error");
            const response = errorHandler(notImplemented);
            expect(response.status).toBe(notImplemented.toResponse().status);
            expect(response.statusText).toBe(notImplemented.toResponse().statusText);
        });
        it("should handle ServerError error", () => {
            const serverError = new ServerError("Server error");
            const response = errorHandler(serverError);
            expect(response.status).toBe(serverError.toResponse().status);
            expect(response.statusText).toBe(serverError.toResponse().statusText);
        });
        it("should handle Unauthorized error", () => {
            const unauthorized = new Unauthorized("Unauthorized error");
            const response = errorHandler(unauthorized);
            expect(response.status).toBe(unauthorized.toResponse().status);
            expect(response.statusText).toBe(unauthorized.toResponse().statusText);
        });
        it("should handle UnprocessableEntity error", () => {
            const unprocessableEntity = new UnprocessableEntity({});
            const response = errorHandler(unprocessableEntity);
            expect(response.status).toBe(unprocessableEntity.toResponse().status);
            expect(response.statusText).toBe(unprocessableEntity.toResponse().statusText);
        });
    });
    describe("Unknown Error", () => {
        it("should return undefined for unknown error types", () => {
            const unknownError = new Error("Unknown error");
            const serverError = new ServerError("Server error");
            const response = errorHandler(unknownError);
            expect(response.status).toBe(serverError.toResponse().status);
            expect(response.statusText).toBe(serverError.toResponse().statusText);
        });
    });
});

import { describe, expect, it } from "vitest";
import { BadRequest } from "../badRequest";
describe("BadRequest", () => {
    it("should create an instance with the correct properties", () => {
        const message = "Invalid request data";
        const cause = { field: "email", error: "Invalid format" };
        const error = new BadRequest(message, cause);
        expect(error.body).toEqual({ name: "BadRequest", message });
        expect(error.status).toBe(400);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBe(JSON.stringify(cause));
    });
    it("should create an instance without a cause", () => {
        const message = "Invalid request data";
        const error = new BadRequest(message);
        expect(error.body).toEqual({ name: "BadRequest", message });
        expect(error.status).toBe(400);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBeUndefined();
    });
    it("should return a Response object from toResponse", async () => {
        const message = "Invalid request data";
        const error = new BadRequest(message);
        const response = error.toResponse();
        expect(response.status).toBe(400);
        expect(response.statusText).toBe(message);
        expect(response.headers.get("Content-Type")).toBe("application/json");
        const body = await response.json();
        expect(body).toEqual({ name: "BadRequest", message });
    });
    it("should return a Response object from toJson", async () => {
        const message = "Invalid request data";
        const error = new BadRequest(message);
        const response = error.toJson();
        expect(response.status).toBe(400);
        expect(response.statusText).toBe(message);
        const body = await response.json();
        expect(body).toEqual({ name: "BadRequest", message });
    });
});

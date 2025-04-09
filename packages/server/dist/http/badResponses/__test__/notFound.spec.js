import { describe, expect, it } from "vitest";
import { NotFound } from "../notFound";
describe("NotFound", () => {
    it("should create an instance with the correct properties", () => {
        const message = "Resource not found";
        const cause = { reason: "ID does not exist" };
        const error = new NotFound(message, cause);
        expect(error.body).toEqual({ name: "NotFound", message });
        expect(error.status).toBe(404);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBe(JSON.stringify(cause));
    });
    it("should create an instance without a cause", () => {
        const message = "Resource not found";
        const error = new NotFound(message);
        expect(error.body).toEqual({ name: "NotFound", message });
        expect(error.status).toBe(404);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBeUndefined();
    });
    it("should return a Response object from toResponse", async () => {
        const message = "Resource not found";
        const error = new NotFound(message);
        const response = error.toResponse();
        expect(response.status).toBe(404);
        expect(response.statusText).toBe(message);
        expect(response.headers.get("Content-Type")).toBe("application/json");
        const body = await response.json();
        expect(body).toEqual({ name: "NotFound", message });
    });
    it("should return a Response object from toJson", async () => {
        const message = "Resource not found";
        const error = new NotFound(message);
        const response = error.toJson();
        expect(response.status).toBe(404);
        expect(response.statusText).toBe(message);
        const body = await response.json();
        expect(body).toEqual({ name: "NotFound", message });
    });
});

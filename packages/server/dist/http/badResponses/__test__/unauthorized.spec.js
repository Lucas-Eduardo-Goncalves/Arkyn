import { describe, expect, it } from "vitest";
import { Unauthorized } from "../unauthorized";
describe("Unauthorized", () => {
    it("should create an instance with the correct properties", () => {
        const message = "Unauthorized access";
        const cause = { reason: "Invalid token" };
        const error = new Unauthorized(message, cause);
        expect(error.body).toEqual({ name: "Unauthorized", message });
        expect(error.status).toBe(401);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBe(JSON.stringify(cause));
    });
    it("should create an instance without a cause", () => {
        const message = "Unauthorized access";
        const error = new Unauthorized(message);
        expect(error.body).toEqual({ name: "Unauthorized", message });
        expect(error.status).toBe(401);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBeUndefined();
    });
    it("should return a Response object from toResponse", async () => {
        const message = "Unauthorized access";
        const error = new Unauthorized(message);
        const response = error.toResponse();
        expect(response.status).toBe(401);
        expect(response.statusText).toBe(message);
        expect(response.headers.get("Content-Type")).toBe("application/json");
        const body = await response.json();
        expect(body).toEqual({ name: "Unauthorized", message });
    });
    it("should return a Response object from toJson", async () => {
        const message = "Unauthorized access";
        const error = new Unauthorized(message);
        const response = error.toJson();
        expect(response.status).toBe(401);
        expect(response.statusText).toBe(message);
        const body = await response.json();
        expect(body).toEqual({ name: "Unauthorized", message });
    });
});

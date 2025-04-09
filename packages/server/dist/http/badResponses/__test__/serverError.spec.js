import { describe, expect, it } from "vitest";
import { ServerError } from "../serverError";
describe("ServerError", () => {
    it("should create an instance with the correct properties", () => {
        const message = "Internal server error occurred";
        const cause = { reason: "Database connection failed" };
        const error = new ServerError(message, cause);
        expect(error.body).toEqual({ name: "ServerError", message });
        expect(error.status).toBe(500);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBe(JSON.stringify(cause));
    });
    it("should create an instance without a cause", () => {
        const message = "Internal server error occurred";
        const error = new ServerError(message);
        expect(error.body).toEqual({ name: "ServerError", message });
        expect(error.status).toBe(500);
        expect(error.statusText).toBe(message);
        expect(error.cause).toBeUndefined();
    });
    it("should return a Response object from toResponse", async () => {
        const message = "Internal server error occurred";
        const error = new ServerError(message);
        const response = error.toResponse();
        expect(response.status).toBe(500);
        expect(response.statusText).toBe(message);
        expect(response.headers.get("Content-Type")).toBe("application/json");
        const body = await response.json();
        expect(body).toEqual({ name: "ServerError", message });
    });
    it("should return a Response object from toJson", async () => {
        const message = "Internal server error occurred";
        const error = new ServerError(message);
        const response = error.toJson();
        expect(response.status).toBe(500);
        expect(response.statusText).toBe(message);
        const body = await response.json();
        expect(body).toEqual({ name: "ServerError", message });
    });
});

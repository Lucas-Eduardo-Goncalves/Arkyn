import { describe, expect, it } from "vitest";
import { NoContent } from "../noContent";
describe("NoContent", () => {
    it("should create a NoContent instance with default values", () => {
        const noContent = new NoContent();
        expect(noContent.status).toBe(204);
        expect(noContent.statusText).toBe("No content");
        expect(noContent.headers).toEqual({});
    });
    it("should create a NoContent instance with custom values", () => {
        const customInit = {
            headers: { "Content-Type": "application/json" },
            status: 200,
            statusText: "Custom Status",
        };
        const noContent = new NoContent(customInit);
        expect(noContent.status).toBe(200);
        expect(noContent.statusText).toBe("Custom Status");
        expect(noContent.headers).toEqual(customInit.headers);
    });
    it("should return a Response object with default values from toResponse", () => {
        const noContent = new NoContent();
        const response = noContent.toResponse();
        expect(response.status).toBe(204);
        expect(response.statusText).toBe("No content");
        expect(response.headers.get("Content-Type")).toBeNull();
    });
    it("should return a Response object with custom values from toResponse", () => {
        const customInit = {
            headers: { "Content-Type": "application/json" },
            status: 200,
            statusText: "Custom Status",
        };
        const noContent = new NoContent(customInit);
        const response = noContent.toResponse();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe("Custom Status");
        expect(response.headers.get("Content-Type")).toBe("application/json");
    });
});

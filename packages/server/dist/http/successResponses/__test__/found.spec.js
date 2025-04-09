import { describe, it, expect } from "vitest";
import { Found } from "../found";
describe("Found", () => {
    it("should create a response with default values", () => {
        const body = { message: "Resource found" };
        const found = new Found(body);
        const response = found.toResponse();
        expect(response.status).toBe(302);
        expect(response.statusText).toBe("Found");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a response with custom values", () => {
        const body = { message: "Custom resource found" };
        const init = {
            headers: { "X-Custom-Header": "CustomValue" },
            status: 301,
            statusText: "Moved Permanently",
        };
        const found = new Found(body, init);
        const response = found.toResponse();
        expect(response.status).toBe(301);
        expect(response.statusText).toBe("Moved Permanently");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
        response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a JSON response with default values", () => {
        const body = { message: "Resource found" };
        const found = new Found(body);
        const response = found.toJson();
        expect(response.status).toBe(302);
        expect(response.statusText).toBe("Found");
        response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a JSON response with custom values", () => {
        const body = { message: "Custom resource found" };
        const init = {
            headers: { "X-Custom-Header": "CustomValue" },
            status: 301,
            statusText: "Moved Permanently",
        };
        const found = new Found(body, init);
        const response = found.toJson();
        expect(response.status).toBe(301);
        expect(response.statusText).toBe("Moved Permanently");
        response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
});

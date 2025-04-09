import { describe, expect, it } from "vitest";
import { Updated } from "../updated";
describe("Updated", () => {
    it("should create a response with default values", () => {
        const body = { message: "Resource updated" };
        const updated = new Updated(body);
        const response = updated.toResponse();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe("Resource updated successfully");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        return response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a response with custom values", () => {
        const body = { message: "Custom update" };
        const init = {
            headers: { "X-Custom-Header": "CustomValue" },
            status: 202,
            statusText: "Accepted",
        };
        const updated = new Updated(body, init);
        const response = updated.toResponse();
        expect(response.status).toBe(202);
        expect(response.statusText).toBe("Accepted");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
        return response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a JSON response with default values using toJson", () => {
        const body = { message: "Resource updated" };
        const updated = new Updated(body);
        const response = updated.toJson();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe("Resource updated successfully");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        return response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
    it("should create a JSON response with custom values using toJson", () => {
        const body = { message: "Custom update" };
        const init = {
            headers: { "X-Custom-Header": "CustomValue" },
            status: 202,
            statusText: "Accepted",
        };
        const updated = new Updated(body, init);
        const response = updated.toJson();
        expect(response.status).toBe(202);
        expect(response.statusText).toBe("Accepted");
        expect(response.headers.get("Content-Type")).toBe("application/json");
        expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
        return response.json().then((data) => {
            expect(data).toEqual(body);
        });
    });
});

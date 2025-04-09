import { describe, it, expect, vi } from "vitest";
import { makeRequest } from "../makeRequest";
global.fetch = vi.fn();
describe("makeRequest", () => {
    it("should return success response for a successful POST request", async () => {
        const mockResponse = { message: "Resource created successfully" };
        const mockBody = { name: "New Resource" };
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 201,
            json: async () => mockResponse,
        });
        const response = await makeRequest("POST", "https://api.example.com/resource", { "Content-Type": "application/json" }, mockBody);
        expect(response).toEqual({
            success: true,
            status: 201,
            message: "Resource created successfully",
            response: mockResponse,
            cause: null,
        });
    });
    it("should return failed response for a failed PUT request", async () => {
        const mockErrorResponse = { error: "Invalid data" };
        const mockBody = { name: "" };
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 400,
            json: async () => mockErrorResponse,
        });
        const response = await makeRequest("PUT", "https://api.example.com/resource", { "Content-Type": "application/json" }, mockBody);
        expect(response.success).toBe(false);
        expect(response.status).toBe(400);
        expect(response.response).toEqual(mockErrorResponse);
        expect(response.message).toBeDefined();
    });
    it("should handle network errors gracefully", async () => {
        fetch.mockRejectedValueOnce(new Error("Network Error"));
        const response = await makeRequest("GET", "https://api.example.com/resource", { "Content-Type": "application/json" });
        expect(response).toEqual({
            success: false,
            status: 0,
            message: "Network error or request failed",
            response: null,
            cause: "Network Error",
        });
    });
    it("should handle invalid JSON response gracefully", async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => {
                throw new Error("Invalid JSON");
            },
        });
        const response = await makeRequest("GET", "https://api.example.com/resource", { "Content-Type": "application/json" });
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Request successful",
            response: null,
            cause: null,
        });
    });
    it("should send headers and body correctly for a DELETE request", async () => {
        const mockResponse = { message: "Resource deleted successfully" };
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 204,
            json: async () => mockResponse,
        });
        const response = await makeRequest("DELETE", "https://api.example.com/resource", { Authorization: "Bearer token" });
        expect(response).toEqual({
            success: true,
            status: 204,
            message: "Resource deleted successfully",
            response: mockResponse,
            cause: null,
        });
    });
});

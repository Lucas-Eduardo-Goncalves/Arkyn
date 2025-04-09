import { describe, it, expect, vi } from "vitest";
import { deleteRequest } from "../deleteRequest";
global.fetch = vi.fn();
describe("deleteRequest", () => {
    it("should return success response for a successfully delete request", async () => {
        const mockResponse = { message: "Resource deleted successfully" };
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => mockResponse,
        });
        const response = await deleteRequest("https://api.example.com/resource");
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Resource deleted successfully",
            response: mockResponse,
            cause: null,
        });
    });
    it("should return failed response for a failed delete request", async () => {
        const mockErrorResponse = { error: "Resource not found" };
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: async () => mockErrorResponse,
        });
        const response = await deleteRequest("https://api.example.com/resource");
        expect(response.success).toBe(false);
        expect(response.status).toBe(404);
        expect(response.response).toEqual(mockErrorResponse);
        expect(response.message).toBeDefined();
    });
    it("should handle network errors gracefully", async () => {
        fetch.mockRejectedValueOnce(new Error("Network Error"));
        const response = await deleteRequest("https://api.example.com/resource");
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
        const response = await deleteRequest("https://api.example.com/resource");
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Resource deleted successfully",
            response: null,
            cause: null,
        });
    });
    it("should send a body with the delete request if provided", async () => {
        const mockResponse = { message: "Resource deleted successfully" };
        const mockBody = { reason: "No longer needed" };
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => mockResponse,
        });
        const response = await deleteRequest("https://api.example.com/resource", { "Content-Type": "application/json" }, mockBody);
        expect(fetch).toHaveBeenCalledWith("https://api.example.com/resource", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mockBody),
        });
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Resource deleted successfully",
            response: mockResponse,
            cause: null,
        });
    });
});

import { describe, it, expect, vi } from "vitest";
import { getRequest } from "../getRequest";
global.fetch = vi.fn();
describe("getRequest", () => {
    it("should return success response for a successful request", async () => {
        const mockResponse = { message: "Request successful", data: { id: 1 } };
        fetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => mockResponse,
        });
        const response = await getRequest("https://api.example.com/resource");
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Request successful",
            response: mockResponse,
            cause: null,
        });
    });
    it("should return failed response for a failed request", async () => {
        const mockErrorResponse = { error: "Not Found" };
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: async () => mockErrorResponse,
        });
        const response = await getRequest("https://api.example.com/resource");
        expect(response.success).toBe(false);
        expect(response.status).toBe(404);
        expect(response.response).toEqual(mockErrorResponse);
        expect(response.message).toBeDefined();
    });
    it("should handle network errors gracefully", async () => {
        fetch.mockRejectedValueOnce(new Error("Network Error"));
        const response = await getRequest("https://api.example.com/resource");
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
        const response = await getRequest("https://api.example.com/resource");
        expect(response).toEqual({
            success: true,
            status: 200,
            message: "Request successful",
            response: null,
            cause: null,
        });
    });
});

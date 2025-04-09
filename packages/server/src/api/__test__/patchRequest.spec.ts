import { describe, it, expect, vi } from "vitest";
import { patchRequest } from "../patchRequest";

global.fetch = vi.fn() as any;

describe("patchRequest", () => {
  it("should return success response for a successful patch request", async () => {
    const mockResponse = { message: "Resource updated successfully" };
    const mockBody = { name: "Updated Name" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockResponse,
    });

    const response = await patchRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 200,
      message: "Resource updated successfully",
      response: mockResponse,
      cause: null,
    });
  });

  it("should return failed response for a failed patch request", async () => {
    const mockErrorResponse = { error: "Resource not found" };
    const mockBody = { name: "Updated Name" };

    (fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => mockErrorResponse,
    });

    const response = await patchRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response.success).toBe(false);
    expect(response.status).toBe(404);
    expect(response.response).toEqual(mockErrorResponse);
    expect(response.message).toBeDefined();
  });

  it("should handle network errors gracefully", async () => {
    const mockBody = { name: "Updated Name" };

    (fetch as any).mockRejectedValueOnce(new Error("Network Error"));

    const response = await patchRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response).toEqual({
      success: false,
      status: 0,
      message: "Network error or request failed",
      response: null,
      cause: "Network Error",
    });
  });

  it("should handle invalid JSON response gracefully", async () => {
    const mockBody = { name: "Updated Name" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    });

    const response = await patchRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 200,
      message: "Resource patched successfully",
      response: null,
      cause: null,
    });
  });

  it("should send headers and body correctly", async () => {
    const mockResponse = { message: "Resource updated successfully" };
    const mockBody = { name: "Updated Name" };
    const mockHeaders = { Authorization: "Bearer token" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockResponse,
    });

    const response = await patchRequest(
      "https://api.example.com/resource",
      mockHeaders,
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 200,
      message: "Resource updated successfully",
      response: mockResponse,
      cause: null,
    });
  });
});

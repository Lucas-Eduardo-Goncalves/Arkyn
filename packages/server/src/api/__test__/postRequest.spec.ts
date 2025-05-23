import { describe, it, expect, vi } from "vitest";
import { postRequest } from "../postRequest";

global.fetch = vi.fn() as any;

describe("postRequest", () => {
  it("should return success response for a successful POST request", async () => {
    const mockResponse = { message: "Resource created successfully" };
    const mockBody = { name: "New Resource" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => mockResponse,
    });

    const response = await postRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 201,
      message: "Resource created successfully",
      response: mockResponse,
      cause: null,
    });
  });

  it("should return failed response for a failed POST request", async () => {
    const mockErrorResponse = { error: "Invalid data" };
    const mockBody = { name: "" };

    (fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => mockErrorResponse,
    });

    const response = await postRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response.success).toBe(false);
    expect(response.status).toBe(400);
    expect(response.response).toEqual(mockErrorResponse);
    expect(response.message).toBeDefined();
  });

  it("should handle network errors gracefully", async () => {
    const mockBody = { name: "New Resource" };

    (fetch as any).mockRejectedValueOnce(new Error("Network Error"));

    const response = await postRequest(
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
    const mockBody = { name: "New Resource" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    });

    const response = await postRequest(
      "https://api.example.com/resource",
      { "Content-Type": "application/json" },
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 201,
      message: "Resource created successfully",
      response: null,
      cause: null,
    });
  });

  it("should send headers and body correctly", async () => {
    const mockResponse = { message: "Resource created successfully" };
    const mockBody = { name: "New Resource" };
    const mockHeaders = { Authorization: "Bearer token" };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => mockResponse,
    });

    const response = await postRequest(
      "https://api.example.com/resource",
      mockHeaders,
      mockBody
    );

    expect(response).toEqual({
      success: true,
      status: 201,
      message: "Resource created successfully",
      response: mockResponse,
      cause: null,
    });
  });
});

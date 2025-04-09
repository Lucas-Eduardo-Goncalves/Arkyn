import { describe, it, expect, vi } from "vitest";
import { ApiInstance } from "../apiInstance";
import { getRequest } from "../../api/getRequest";
import { postRequest } from "../../api/postRequest";
import { putRequest } from "../../api/putRequest";
import { patchRequest } from "../../api/patchRequest";
import { deleteRequest } from "../../api/deleteRequest";

vi.mock("../../api/getRequest");
vi.mock("../../api/postRequest");
vi.mock("../../api/putRequest");
vi.mock("../../api/patchRequest");
vi.mock("../../api/deleteRequest");

describe("ApiInstance", () => {
  const baseUrl = "https://api.example.com";
  const baseHeaders = { "Content-Type": "application/json" };
  const baseToken = "base-token";

  const apiInstance = new ApiInstance({
    baseUrl,
    baseHeaders,
    baseToken,
  });

  it("should send a GET request with correct headers and URL", async () => {
    const mockResponse = { success: true, data: "GET response" };
    (getRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.GET("/resource", {});

    expect(getRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer ${baseToken}`,
        "Content-Type": "application/json",
      })
    );
    expect(response).toEqual(mockResponse);
  });

  it("should send a POST request with correct headers, URL, and body", async () => {
    const mockResponse = { success: true, data: "POST response" };
    const mockBody = { name: "New Resource" };
    (postRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.POST("/resource", { body: mockBody });

    expect(postRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer ${baseToken}`,
        "Content-Type": "application/json",
      }),
      mockBody
    );
    expect(response).toEqual(mockResponse);
  });

  it("should send a PUT request with correct headers, URL, and body", async () => {
    const mockResponse = { success: true, data: "PUT response" };
    const mockBody = { name: "Updated Resource" };
    (putRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.PUT("/resource", { body: mockBody });

    expect(putRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer ${baseToken}`,
        "Content-Type": "application/json",
      }),
      mockBody
    );
    expect(response).toEqual(mockResponse);
  });

  it("should send a PATCH request with correct headers, URL, and body", async () => {
    const mockResponse = { success: true, data: "PATCH response" };
    const mockBody = { name: "Partially Updated Resource" };
    (patchRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.PATCH("/resource", { body: mockBody });

    expect(patchRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer ${baseToken}`,
        "Content-Type": "application/json",
      }),
      mockBody
    );
    expect(response).toEqual(mockResponse);
  });

  it("should send a DELETE request with correct headers, URL, and body", async () => {
    const mockResponse = { success: true, data: "DELETE response" };
    const mockBody = { id: 1 };
    (deleteRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.DELETE("/resource", { body: mockBody });

    expect(deleteRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer ${baseToken}`,
        "Content-Type": "application/json",
      }),
      mockBody
    );
    expect(response).toEqual(mockResponse);
  });

  it("should override base token with provided token", async () => {
    const mockResponse = { success: true, data: "GET response with token" };
    (getRequest as any).mockResolvedValueOnce(mockResponse);

    const response = await apiInstance.GET("/resource", { token: "new-token" });

    expect(getRequest).toHaveBeenCalledWith(
      `${baseUrl}/resource`,
      expect.objectContaining({
        Authorization: `Bearer new-token`,
        "Content-Type": "application/json",
      })
    );
    expect(response).toEqual(mockResponse);
  });
});

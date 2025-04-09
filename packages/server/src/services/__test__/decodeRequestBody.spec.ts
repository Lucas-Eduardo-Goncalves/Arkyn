import { decodeRequestBody } from "../decodeRequestBody";
import { BadRequest } from "../../http/badResponses/badRequest";
import { describe, expect, it } from "vitest";

describe("decodeRequestBody", () => {
  it("should decode the request body as JSON", async () => {
    const mockRequest = {
      arrayBuffer: async () =>
        new TextEncoder().encode(JSON.stringify({ key: "value" })).buffer,
    };

    const result = await decodeRequestBody(mockRequest as any);
    expect(result).toEqual({ key: "value" });
  });

  it("should decode the request body as URL-encoded form data", async () => {
    const mockRequest = {
      arrayBuffer: async () =>
        new TextEncoder().encode("key=value&anotherKey=anotherValue").buffer,
    };

    const result = await decodeRequestBody(mockRequest as any);
    expect(result).toEqual({ key: "value", anotherKey: "anotherValue" });
  });

  it("should throw BadRequest if the text is neither valid JSON nor URL-encoded", async () => {
    const mockRequest = {
      arrayBuffer: async () => new TextEncoder().encode("{invalidJson").buffer,
    };

    await expect(decodeRequestBody(mockRequest as any)).rejects.toThrow();
  });

  it("should throw BadRequest if the text is not a valid format for URLSearchParams", async () => {
    const mockRequest = {
      arrayBuffer: async () => new TextEncoder().encode("invalidFormat").buffer,
    };

    await expect(decodeRequestBody(mockRequest as any)).rejects.toThrow();
  });

  it("should throw BadRequest if an error occurs while reading the body", async () => {
    const mockRequest = {
      arrayBuffer: async () => {
        throw new Error("Error reading the body");
      },
    };

    await expect(decodeRequestBody(mockRequest as any)).rejects.toThrow();
  });
});

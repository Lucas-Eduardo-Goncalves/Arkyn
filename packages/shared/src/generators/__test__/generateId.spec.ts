import { describe, it, expect } from "vitest";
import { generateId } from "../generateId";

describe("generateId", () => {
  it("should generate a valid UUID v4 as text", () => {
    const id = generateId("text", "v4");
    expect(typeof id).toBe("string");
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  it("should generate a valid UUID v4 as binary", () => {
    const id = generateId("binary", "v4");
    expect(id).toBeInstanceOf(Uint8Array);
    expect(id.length).toBe(16); // UUIDs in binary format are 16 bytes
  });

  it("should generate a valid UUID v7 as text", () => {
    const id = generateId("text", "v7");
    expect(typeof id).toBe("string");
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  it("should generate a valid UUID v7 as binary", () => {
    const id = generateId("binary", "v7");
    expect(id).toBeInstanceOf(Uint8Array);
    expect(id.length).toBe(16); // UUIDs in binary format are 16 bytes
  });

  it("should throw an error for invalid type", () => {
    expect(() => generateId("invalid" as any, "v4")).toThrow(
      "Invalid type or format"
    );
  });

  it("should throw an error for invalid format", () => {
    expect(() => generateId("text", "v8" as any)).toThrow(
      "Invalid type or format"
    );
  });
});

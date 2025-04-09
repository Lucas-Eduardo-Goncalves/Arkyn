import { describe, it, expect } from "vitest";
import { truncateLargeFields } from "../truncateLargeFields";

describe("truncateLargeFields", () => {
  it("should truncate string fields exceeding the maxLength", () => {
    const json = JSON.stringify({
      name: "John",
      description: "A very long description that exceeds the maximum length...",
    });

    const result = truncateLargeFields(json, 20);
    expect(result).toBe(
      '{"name":"John","description":"To large information: field as 58 characters"}'
    );
  });

  it("should handle nested objects and truncate large string fields", () => {
    const json = JSON.stringify({
      nested: {
        details: "Another long string that needs truncation.",
      },
    });

    const result = truncateLargeFields(json, 20);
    expect(result).toBe(
      '{"nested":{"details":"To large information: field as 42 characters"}}'
    );
  });

  it("should handle arrays and truncate large string fields within them", () => {
    const json = JSON.stringify({
      items: ["short", "A very long string in an array that exceeds the limit"],
    });

    const result = truncateLargeFields(json, 20);
    expect(result).toBe(
      '{"items":["short","To large information: field as 53 characters"]}'
    );
  });

  it("should not modify fields that are within the maxLength", () => {
    const json = JSON.stringify({
      name: "John",
      description: "Short description",
    });

    const result = truncateLargeFields(json, 20);
    expect(result).toBe('{"name":"John","description":"Short description"}');
  });

  it("should throw an error for invalid JSON strings", () => {
    const invalidJson = "{ name: 'John' }"; // Invalid JSON
    expect(() => truncateLargeFields(invalidJson, 20)).toThrow(
      "Invalid JSON string"
    );
  });

  it("should handle empty JSON objects", () => {
    const json = JSON.stringify({});
    const result = truncateLargeFields(json, 20);
    expect(result).toBe("{}");
  });

  it("should handle empty arrays", () => {
    const json = JSON.stringify([]);
    const result = truncateLargeFields(json, 20);
    expect(result).toBe("[]");
  });

  it("should handle non-string fields without modification", () => {
    const json = JSON.stringify({
      number: 123,
      boolean: true,
      nullValue: null,
    });

    const result = truncateLargeFields(json, 20);
    expect(result).toBe('{"number":123,"boolean":true,"nullValue":null}');
  });

  it("should use the default maxLength of 1000 if not provided", () => {
    const longString = "a".repeat(1500);
    const json = JSON.stringify({ longField: longString });
    const result = truncateLargeFields(json);

    expect(result).toBe(
      `{"longField":"To large information: field as 1500 characters"}`
    );
  });
});

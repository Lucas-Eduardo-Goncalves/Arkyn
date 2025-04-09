import { describe, it, expect, vi } from "vitest";
import { formatJsonString } from "../formatJsonString";

describe("formatJsonString", () => {
  it("should format a valid JSON string", () => {
    const jsonString =
      '{"name":"John","age":30,"hobbies":["reading","gaming"]}';
    const result = formatJsonString(jsonString);
    expect(result).toBe(`{
  "name": "John",
  "age": 30,
  "hobbies": [
    "reading",
    "gaming"
  ]
}`);
  });

  it("should handle a nested JSON string", () => {
    const jsonString =
      '{"user":{"name":"John","details":{"age":30,"city":"New York"}}}';
    const result = formatJsonString(jsonString);
    expect(result).toBe(`{
  "user": {
    "name": "John",
    "details": {
      "age": 30,
      "city": "New York"
    }
  }
}`);
  });

  it("should handle an empty JSON object", () => {
    const jsonString = "{}";
    const result = formatJsonString(jsonString);
    expect(result).toBe(`{}`);
  });

  it("should handle an empty JSON array", () => {
    const jsonString = "[]";
    const result = formatJsonString(jsonString);
    expect(result).toBe(`[]`);
  });

  it("should handle a JSON array", () => {
    const jsonString = '["apple","banana","cherry"]';
    const result = formatJsonString(jsonString);
    expect(result).toBe(`[
  "apple",
  "banana",
  "cherry"
]`);
  });

  it("should return an empty string for invalid JSON", () => {
    const invalidJsonString = '{"name":"John", "age":30,';
    expect(() => formatJsonString(invalidJsonString)).toThrow();
  });

  it("should log an error for invalid JSON", () => {
    const invalidJsonString = '{"name":"John", "age":30,';
    expect(() => formatJsonString(invalidJsonString)).toThrow();
  });

  it("should handle a primitive JSON value", () => {
    const jsonString = "42";
    const result = formatJsonString(jsonString);
    expect(result).toBe("42");
  });

  it("should handle a JSON string value", () => {
    const jsonString = '"hello"';
    const result = formatJsonString(jsonString);
    expect(result).toBe('"hello"');
  });

  it("should handle null JSON value", () => {
    const jsonString = "null";
    const result = formatJsonString(jsonString);
    expect(result).toBe("null");
  });
});

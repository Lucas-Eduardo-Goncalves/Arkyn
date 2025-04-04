import { describe, it, expect } from "vitest";
import { formatJsonObject } from "../formatJsonObject";

describe("formatJsonObject", () => {
  it("should format a simple JSON object", () => {
    const obj = { name: "John", age: 30 };
    const result = formatJsonObject(obj, 0);
    expect(result).toBe(`{
  "name": "John",
  "age": 30
}`);
  });

  it("should format a nested JSON object", () => {
    const obj = { name: "John", details: { age: 30, city: "New York" } };
    const result = formatJsonObject(obj, 0);
    expect(result).toBe(`{
  "name": "John",
  "details": {
    "age": 30,
    "city": "New York"
  }
}`);
  });

  it("should format a JSON array", () => {
    const obj = ["apple", "banana", "cherry"];
    const result = formatJsonObject(obj, 0);
    expect(result).toBe(`[
  "apple",
  "banana",
  "cherry"
]`);
  });

  it("should format a nested JSON array", () => {
    const obj = { fruits: ["apple", "banana", "cherry"] };
    const result = formatJsonObject(obj, 0);
    expect(result).toBe(`{
  "fruits": [
    "apple",
    "banana",
    "cherry"
  ]
}`);
  });

  it("should format a primitive value", () => {
    const result = formatJsonObject(42, 0);
    expect(result).toBe("42");
  });

  it("should format a string value", () => {
    const result = formatJsonObject("hello", 0);
    expect(result).toBe('"hello"');
  });

  it("should format a JSON string", () => {
    const jsonString = '{"name":"John","age":30}';
    const result = formatJsonObject(jsonString, 0);
    expect(result).toBe(`{
  "name": "John",
  "age": 30
}`);
  });

  it("should handle invalid JSON strings as plain strings", () => {
    const invalidJson = "{name:John}";
    const result = formatJsonObject(invalidJson, 0);
    expect(result).toBe('"{name:John}"');
  });

  it("should handle null values", () => {
    const result = formatJsonObject(null, 0);
    expect(result).toBe("null");
  });

  it("should handle empty objects", () => {
    const result = formatJsonObject({}, 0);
    expect(result).toBe(`{}`);
  });

  it("should handle empty arrays", () => {
    const result = formatJsonObject([], 0);
    expect(result).toBe(`[]`);
  });
});

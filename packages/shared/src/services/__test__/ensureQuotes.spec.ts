import { describe, it, expect } from "vitest";
import { ensureQuotes } from "../ensureClothes";

describe("ensureQuotes", () => {
  it("should return the string as-is if it is already enclosed in single quotes", () => {
    const input = "'example'";
    const result = ensureQuotes(input);
    expect(result).toBe(input);
  });

  it("should return the string as-is if it is already enclosed in double quotes", () => {
    const input = '"example"';
    const result = ensureQuotes(input);
    expect(result).toBe(input);
  });

  it("should wrap the string in double quotes if it is not quoted", () => {
    const input = "example";
    const result = ensureQuotes(input);
    expect(result).toBe('"example"');
  });

  it("should handle an empty string by wrapping it in double quotes", () => {
    const input = "";
    const result = ensureQuotes(input);
    expect(result).toBe('""');
  });

  it("should handle strings with spaces by wrapping them in double quotes", () => {
    const input = "example with spaces";
    const result = ensureQuotes(input);
    expect(result).toBe('"example with spaces"');
  });

  it("should not modify strings that are already properly quoted with special characters", () => {
    const input = "'example with spaces'";
    const result = ensureQuotes(input);
    expect(result).toBe(input);
  });
});

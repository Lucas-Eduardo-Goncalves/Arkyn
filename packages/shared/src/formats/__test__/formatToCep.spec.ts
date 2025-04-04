import { describe, it, expect } from "vitest";
import { formatToCep } from "../formatToCep";

describe("formatToCep", () => {
  it("should format a valid CEP with only numeric characters", () => {
    const result = formatToCep("12345678");
    expect(result).toBe("12345-678");
  });

  it("should format a valid CEP with non-numeric characters", () => {
    const result = formatToCep("12345-678");
    expect(result).toBe("12345-678");
  });

  it("should throw an error for invalid CEP length", () => {
    expect(() => formatToCep("1234")).toThrow("Invalid CEP format");
    expect(() => formatToCep("123456789")).toThrow("Invalid CEP format");
  });

  it("should handle empty input and throw an error", () => {
    expect(() => formatToCep("")).toThrow("Invalid CEP format");
  });

  it("should ignore non-numeric characters and format correctly", () => {
    const result = formatToCep("12345-678abc");
    expect(result).toBe("12345-678");
  });

  it("should format a CEP with extra spaces", () => {
    const result = formatToCep("  12345678  ");
    expect(result).toBe("12345-678");
  });

  it("should throw an error for completely invalid input", () => {
    expect(() => formatToCep("abcdefg")).toThrow("Invalid CEP format");
  });
});

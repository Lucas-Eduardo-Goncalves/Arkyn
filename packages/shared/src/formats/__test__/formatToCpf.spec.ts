import { describe, it, expect } from "vitest";
import { formatToCpf } from "../formatToCpf";

describe("formatToCpf", () => {
  it("should format a valid CPF with only numeric characters", () => {
    const result = formatToCpf("12345678909");
    expect(result).toBe("123.456.789-09");
  });

  it("should format a valid CPF with non-numeric characters", () => {
    const result = formatToCpf("123.456.789-09");
    expect(result).toBe("123.456.789-09");
  });

  it("should throw an error for invalid CPF length", () => {
    expect(() => formatToCpf("12345")).toThrow("Invalid CPF format");
    expect(() => formatToCpf("123456789012")).toThrow("Invalid CPF format");
  });

  it("should handle empty input and throw an error", () => {
    expect(() => formatToCpf("")).toThrow("Invalid CPF format");
  });

  it("should ignore non-numeric characters and format correctly", () => {
    const result = formatToCpf("123.456.789-09abc");
    expect(result).toBe("123.456.789-09");
  });

  it("should format a CPF with extra spaces", () => {
    const result = formatToCpf("  12345678909  ");
    expect(result).toBe("123.456.789-09");
  });

  it("should throw an error for completely invalid input", () => {
    expect(() => formatToCpf("abcdefg")).toThrow("Invalid CPF format");
  });
});

import { describe, it, expect } from "vitest";
import { removeNonNumeric } from "../removeNonNumeric";

describe("removeNonNumeric", () => {
  it("should remove all non-numeric characters from a string", () => {
    expect(removeNonNumeric("abc123def456")).toBe("123456");
    expect(removeNonNumeric("!@#123$%^456&*()")).toBe("123456");
    expect(removeNonNumeric("a1b2c3")).toBe("123");
  });

  it("should return an empty string if there are no numeric characters", () => {
    expect(removeNonNumeric("abcdef")).toBe("");
    expect(removeNonNumeric("!@#$%^&*()")).toBe("");
  });

  it("should return the same string if it contains only numeric characters", () => {
    expect(removeNonNumeric("123456")).toBe("123456");
    expect(removeNonNumeric("000123")).toBe("000123");
  });

  it("should handle an empty string input", () => {
    expect(removeNonNumeric("")).toBe("");
  });

  it("should handle strings with spaces and remove them", () => {
    expect(removeNonNumeric("123 456 789")).toBe("123456789");
    expect(removeNonNumeric(" 1 2 3 ")).toBe("123");
  });

  it("should handle strings with special characters and preserve only numbers", () => {
    expect(removeNonNumeric("12-34.56/78")).toBe("12345678");
  });
});

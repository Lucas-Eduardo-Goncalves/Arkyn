import { describe, it, expect } from "vitest";
import { formatToEllipsis } from "../formatToEllipsis";

describe("formatToEllipsis", () => {
  it("should truncate text and append ellipsis if it exceeds the maxLength", () => {
    const result = formatToEllipsis("Hello, world!", 5);
    expect(result).toBe("Hello...");
  });

  it("should return the original text if it does not exceed the maxLength", () => {
    const result = formatToEllipsis("Hello", 10);
    expect(result).toBe("Hello");
  });

  it("should handle empty strings", () => {
    const result = formatToEllipsis("", 5);
    expect(result).toBe("");
  });

  it("should handle maxLength of 0", () => {
    const result = formatToEllipsis("Hello, world!", 0);
    expect(result).toBe("...");
  });

  it("should handle maxLength greater than the text length", () => {
    const result = formatToEllipsis("Short text", 20);
    expect(result).toBe("Short text");
  });

  it("should handle text exactly equal to maxLength", () => {
    const result = formatToEllipsis("Exact", 5);
    expect(result).toBe("Exact");
  });

  it("should handle special characters in the text", () => {
    const result = formatToEllipsis("Olá, mundo!", 4);
    expect(result).toBe("Olá...");
  });

  it("should handle whitespace correctly", () => {
    const result = formatToEllipsis("Hello world", 6);
    expect(result).toBe("Hello...");
  });
});

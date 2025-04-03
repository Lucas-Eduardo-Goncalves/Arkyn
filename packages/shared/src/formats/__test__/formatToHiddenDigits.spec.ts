import { describe, it, expect } from "vitest";
import { formatToHiddenDigits } from "../formatToHiddenDigits";

describe("formatToHiddenDigits", () => {
  it("should hide the first 3 digits by default", () => {
    const result = formatToHiddenDigits("123-456-7890", {});
    expect(result).toBe("***-456-7890");
  });

  it("should hide the first n digits when range is a positive number", () => {
    const result = formatToHiddenDigits("123-456-7890", { range: 5 });
    expect(result).toBe("***-**6-7890");
  });

  it("should hide the last n digits when range is a negative number", () => {
    const result = formatToHiddenDigits("123-456-7890", { range: -4 });
    expect(result).toBe("123-456-****");
  });

  it("should hide digits within a specific range", () => {
    const result = formatToHiddenDigits("123-456-7890", { range: [4, 6] });
    expect(result).toBe("123-***-7890");
  });

  it("should use a custom hider character", () => {
    const result = formatToHiddenDigits("123-456-7890", {
      range: 3,
      hider: "#",
    });

    expect(result).toBe("###-456-7890");
  });

  it("should handle strings with no digits", () => {
    const result = formatToHiddenDigits("abc-def-ghij", { range: 3 });
    expect(result).toBe("abc-def-ghij");
  });

  it("should handle empty strings", () => {
    const result = formatToHiddenDigits("", { range: 3 });
    expect(result).toBe("");
  });

  it("should handle ranges larger than the number of digits", () => {
    const result = formatToHiddenDigits("123-456", { range: 10 });
    expect(result).toBe("***-***");
  });

  it("should handle ranges that do not overlap with any digits", () => {
    const result = formatToHiddenDigits("123-456-7890", { range: [11, 12] });
    expect(result).toBe("123-456-7890");
  });

  it("should hide all digits when range covers all digits", () => {
    const result = formatToHiddenDigits("123-456-7890", { range: [1, 10] });
    expect(result).toBe("***-***-****");
  });
});

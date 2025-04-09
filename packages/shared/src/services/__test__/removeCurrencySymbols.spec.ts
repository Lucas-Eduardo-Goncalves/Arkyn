import { describe, it, expect } from "vitest";
import { removeCurrencySymbols } from "../removeCurrencySymbols";

describe("removeCurrencySymbols", () => {
  it("should remove common currency symbols from the string", () => {
    expect(removeCurrencySymbols("R$13,45")).toBe("13,45");
    expect(removeCurrencySymbols("$123.45")).toBe("123.45");
    expect(removeCurrencySymbols("€99.99")).toBe("99.99");
    expect(removeCurrencySymbols("¥1,000")).toBe("1,000");
  });

  it("should handle strings without currency symbols", () => {
    expect(removeCurrencySymbols("123.45")).toBe("123.45");
    expect(removeCurrencySymbols("1,000")).toBe("1,000");
  });

  it("should handle strings with multiple currency symbols", () => {
    expect(removeCurrencySymbols("R$ $123.45")).toBe("123.45");
    expect(removeCurrencySymbols("€¥99,99")).toBe("99,99");
  });

  it("should handle strings with leading and trailing whitespace", () => {
    expect(removeCurrencySymbols("  $123.45  ")).toBe("123.45");
    expect(removeCurrencySymbols("\t€99.99\n")).toBe("99.99");
  });

  it("should return an empty string if the input is only currency symbols", () => {
    expect(removeCurrencySymbols("R$")).toBe("");
    expect(removeCurrencySymbols("$")).toBe("");
    expect(removeCurrencySymbols("€")).toBe("");
  });

  it("should handle an empty string input", () => {
    expect(removeCurrencySymbols("")).toBe("");
  });

  it("should handle strings with special characters but no currency symbols", () => {
    expect(removeCurrencySymbols("123-45")).toBe("123-45");
    expect(removeCurrencySymbols("1,000.00")).toBe("1,000.00");
  });
});

import { describe, it, expect } from "vitest";
import { formatToCurrency } from "../formatToCurrency";

describe("formatToCurrency", () => {
  it("should format a number to USD currency with prefix", () => {
    const result = formatToCurrency(1234.56, "USD", { showPrefix: true });
    expect(result).toBe("$1,234.56");
  });

  it("should format a number to USD currency without prefix", () => {
    const result = formatToCurrency(1234.56, "USD", { showPrefix: false });
    expect(result).toBe("1,234.56");
  });

  it("should format a number to BRL currency with prefix", () => {
    const result = formatToCurrency(1234.56, "BRL", { showPrefix: true });
    expect(result).toBe("R$ 1.234,56");
  });

  it("should format a number to BRL currency without prefix", () => {
    const result = formatToCurrency(1234.56, "BRL", { showPrefix: false });
    expect(result).toBe("1.234,56");
  });

  it("should format a number to EUR currency with prefix", () => {
    const result = formatToCurrency(1234.56, "EUR", { showPrefix: true });
    expect(result).toEqual("1.234,56 €");
  });

  it("should format a number to EUR currency without prefix", () => {
    const result = formatToCurrency(1234.56, "EUR", { showPrefix: false });
    expect(result).toBe("1.234,56");
  });

  it("should handle zero value correctly", () => {
    const result = formatToCurrency(0, "USD", { showPrefix: true });
    expect(result).toBe("$0.00");
  });

  it("should handle negative values correctly", () => {
    const result = formatToCurrency(-1234.56, "USD", { showPrefix: true });
    expect(result).toBe("-$1,234.56");
  });

  it("should throw an error for unsupported currency codes", () => {
    expect(() =>
      formatToCurrency(1234.56, "XYZ" as any, { showPrefix: true })
    ).toThrow("Unsupported currency code");
  });
});

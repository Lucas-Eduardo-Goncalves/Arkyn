import { describe, it, expect } from "vitest";
import { formatToCnpj } from "../formatToCnpj";

describe("formatToCnpj", () => {
  it("should format a valid CNPJ with only numeric characters", () => {
    const result = formatToCnpj("12345678000195");
    expect(result).toBe("12.345.678/0001-95");
  });

  it("should format a valid CNPJ with non-numeric characters", () => {
    const result = formatToCnpj("12.345.678/0001-95");
    expect(result).toBe("12.345.678/0001-95");
  });

  it("should throw an error for invalid CNPJ length", () => {
    expect(() => formatToCnpj("123")).toThrow("Invalid CNPJ length");
    expect(() => formatToCnpj("123456789012345")).toThrow(
      "Invalid CNPJ length"
    );
  });

  it("should handle empty input and throw an error", () => {
    expect(() => formatToCnpj("")).toThrow("Invalid CNPJ length");
  });

  it("should ignore non-numeric characters and format correctly", () => {
    const result = formatToCnpj("12.345.678/0001-95abc");
    expect(result).toBe("12.345.678/0001-95");
  });

  it("should format a CNPJ with extra spaces", () => {
    const result = formatToCnpj("  12345678000195  ");
    expect(result).toBe("12.345.678/0001-95");
  });
});

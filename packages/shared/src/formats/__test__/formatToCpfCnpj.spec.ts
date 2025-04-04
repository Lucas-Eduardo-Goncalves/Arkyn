import { describe, it, expect } from "vitest";
import { formatToCpfCnpj } from "../formatToCpfCnpj";

describe("formatToCpfCnpj", () => {
  it("should format a valid CPF with non-numeric characters", () => {
    const result = formatToCpfCnpj("123.456.789-09");
    expect(result).toBe("123.456.789-09");
  });

  it("should format a valid CPF with only numeric characters", () => {
    const result = formatToCpfCnpj("12345678909");
    expect(result).toBe("123.456.789-09");
  });

  it("should format a valid CNPJ with non-numeric characters", () => {
    const result = formatToCpfCnpj("12.345.678/0001-95");
    expect(result).toBe("12.345.678/0001-95");
  });

  it("should format a valid CNPJ with only numeric characters", () => {
    const result = formatToCpfCnpj("12345678000195");
    expect(result).toBe("12.345.678/0001-95");
  });

  it("should throw an error for invalid CPF or CNPJ length", () => {
    expect(() => formatToCpfCnpj("123")).toThrow("Invalid CPF or CNPJ length");
    expect(() => formatToCpfCnpj("123456")).toThrow(
      "Invalid CPF or CNPJ length"
    );
    expect(() => formatToCpfCnpj("123456789012345")).toThrow(
      "Invalid CPF or CNPJ length"
    );
  });

  it("should handle empty input and throw an error", () => {
    expect(() => formatToCpfCnpj("")).toThrow("Invalid CPF or CNPJ length");
  });

  it("should ignore non-numeric characters and format correctly", () => {
    const result = formatToCpfCnpj("123.456.789-09abc");
    expect(result).toBe("123.456.789-09");
  });
});

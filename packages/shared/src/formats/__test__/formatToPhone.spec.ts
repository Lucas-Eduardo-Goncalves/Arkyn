import { describe, it, expect } from "vitest";
import { formatToPhone } from "../formatToPhone";

describe("formatToPhone", () => {
  it("should format a Brazilian phone number with 9 digits", () => {
    const result = formatToPhone("+55 11912345678");
    expect(result).toBe("(11) 91234-5678");
  });

  it("should format a Brazilian phone number with 8 digits", () => {
    const result = formatToPhone("+55 1123456789");
    expect(result).toBe("(11) 2345-6789");
  });

  it("should format a US phone number with a prefix", () => {
    const result = formatToPhone("+1-408 4567890");
    expect(result).toBe("(408) 456-7890");
  });

  it("should format a US phone number without a prefix", () => {
    expect(() => formatToPhone("+1 4567890")).toThrow("Invalid country code");
  });

  it("should throw an error for invalid phone number format", () => {
    expect(() => formatToPhone("+55")).toThrow("Invalid phone number format");
    expect(() => formatToPhone("+55-11")).toThrow(
      "Invalid phone number format"
    );
  });

  it("should throw an error for unrecognized country code", () => {
    expect(() => formatToPhone("+99 123456789")).toThrow(
      "Invalid country code"
    );
  });

  it("should throw an error for unrecognized country code or prefix", () => {
    expect(() => formatToPhone("+1-999 123456789")).toThrow(
      "Invalid country code or prefix"
    );
  });

  it("should handle empty input and throw an error", () => {
    expect(() => formatToPhone("")).toThrow("Invalid phone number format");
  });

  it("should format a phone number with special characters removed", () => {
    expect(() => formatToPhone("+55 11 91234-5678")).toThrow(
      "Invalid phone number format. Expected format: +<countryCode>-<optionalPrefix> <phoneNumber>"
    );
  });

  it("should format a phone number with spaces and special characters", () => {
    expect(() => formatToPhone("+55 11 91234 5678")).toThrow(
      "Invalid phone number format. Expected format: +<countryCode>-<optionalPrefix> <phoneNumber>"
    );
  });
});

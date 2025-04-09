import { describe, it, expect } from "vitest";
import { generateColorByString } from "../generateColorByString";

describe("generateColorByString", () => {
  it("should generate a consistent hex color for the same input string", () => {
    const color1 = generateColorByString("example");
    const color2 = generateColorByString("example");
    expect(color1).toBe(color2);
  });

  it("should generate different hex colors for different input strings", () => {
    const color1 = generateColorByString("example1");
    const color2 = generateColorByString("example2");
    expect(color1).not.toBe(color2);
  });

  it("should return a valid hex color code", () => {
    const color = generateColorByString("test");
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it("should handle empty strings and return a valid hex color", () => {
    const color = generateColorByString("");
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it("should handle strings with special characters", () => {
    const color = generateColorByString("!@#$%^&*()");
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it("should handle long strings and return a valid hex color", () => {
    const longString = "a".repeat(1000);
    const color = generateColorByString(longString);
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });
});

import { describe, it, expect } from "vitest";
import { generateSlug } from "../generateSlug";

describe("generateSlug", () => {
  it("should convert a string to a URL-friendly slug", () => {
    expect(generateSlug("Hello World")).toBe("hello-world");
    expect(generateSlug("This is a Test")).toBe("this-is-a-test");
  });

  it("should remove diacritical marks (accents)", () => {
    expect(generateSlug("Olá Mundo")).toBe("ola-mundo");
    expect(generateSlug("Crème brûlée")).toBe("creme-brulee");
  });

  it("should remove non-alphanumeric characters except spaces and hyphens", () => {
    expect(generateSlug("Hello, World!")).toBe("hello-world");
    expect(generateSlug("C# Programming")).toBe("c-programming");
  });

  it("should collapse multiple spaces into a single hyphen", () => {
    expect(generateSlug("Hello     World")).toBe("hello-world");
  });

  it("should collapse multiple consecutive hyphens into a single hyphen", () => {
    expect(generateSlug("Hello--World")).toBe("hello-world");
    expect(generateSlug("Hello---World")).toBe("hello-world");
  });

  it("should trim leading and trailing hyphens", () => {
    expect(generateSlug("-Hello World-")).toBe("hello-world");
    expect(generateSlug("--Hello World--")).toBe("hello-world");
  });

  it("should handle empty strings", () => {
    expect(generateSlug("")).toBe("");
  });

  it("should handle strings with only special characters", () => {
    expect(generateSlug("!@#$%^&*()")).toBe("");
    expect(generateSlug("---")).toBe("");
  });

  it("should handle strings with numbers", () => {
    expect(generateSlug("Version 2.0")).toBe("version-20");
    expect(generateSlug("123 Testing")).toBe("123-testing");
  });
});

import { describe, it, expect } from "vitest";
import { maskSensitiveData } from "../maskSensitiveData";

describe("maskSensitiveData", () => {
  it("should mask sensitive keys in a flat JSON object", () => {
    const jsonString = JSON.stringify({
      username: "user123",
      password: "secret",
      email: "user@example.com",
    });

    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe(
      '{"username":"user123","password":"****","email":"user@example.com"}'
    );
  });

  it("should mask sensitive keys in nested objects", () => {
    const jsonString = JSON.stringify({
      profile: {
        username: "user123",
        creditCard: "1234-5678-9012-3456",
      },
    });

    const result = maskSensitiveData(jsonString, ["creditCard"]);
    expect(result).toBe(
      '{"profile":{"username":"user123","creditCard":"****"}}'
    );
  });

  it("should mask sensitive keys in arrays", () => {
    const jsonString = JSON.stringify({
      users: [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
      ],
    });

    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe(
      '{"users":[{"username":"user1","password":"****"},{"username":"user2","password":"****"}]}'
    );
  });

  it("should handle non-JSON strings gracefully", () => {
    const invalidJson = "not a json string";
    const result = maskSensitiveData(invalidJson, ["password"]);
    expect(result).toBe("not a json string");
  });

  it("should handle empty JSON objects", () => {
    const jsonString = JSON.stringify({});
    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe("{}");
  });

  it("should handle empty arrays", () => {
    const jsonString = JSON.stringify([]);
    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe("[]");
  });

  it("should use default sensitive keys if none are provided", () => {
    const jsonString = JSON.stringify({
      username: "user123",
      password: "secret",
      confirmPassword: "secret",
      creditCard: "1234-5678-9012-3456",
    });

    const result = maskSensitiveData(jsonString);
    expect(result).toBe(
      '{"username":"user123","password":"****","confirmPassword":"****","creditCard":"****"}'
    );
  });

  it("should not mask keys that are not in the sensitive keys list", () => {
    const jsonString = JSON.stringify({
      username: "user123",
      email: "user@example.com",
    });

    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe('{"username":"user123","email":"user@example.com"}');
  });

  it("should handle deeply nested objects", () => {
    const jsonString = JSON.stringify({
      level1: {
        level2: {
          level3: {
            password: "secret",
          },
        },
      },
    });

    const result = maskSensitiveData(jsonString, ["password"]);
    expect(result).toBe('{"level1":{"level2":{"level3":{"password":"****"}}}}');
  });
});

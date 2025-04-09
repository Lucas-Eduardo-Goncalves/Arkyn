import { describe, expect, it } from "vitest";
import { Forbidden } from "../forbidden";

describe("Forbidden", () => {
  it("should create an instance with the correct properties", () => {
    const message = "Access is forbidden";
    const cause = { reason: "Insufficient permissions" };
    const error = new Forbidden(message, cause);

    expect(error.body).toEqual({ name: "Forbidden", message });
    expect(error.status).toBe(403);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBe(JSON.stringify(cause));
  });

  it("should create an instance without a cause", () => {
    const message = "Access is forbidden";
    const error = new Forbidden(message);

    expect(error.body).toEqual({ name: "Forbidden", message });
    expect(error.status).toBe(403);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBeUndefined();
  });

  it("should return a Response object from toResponse", async () => {
    const message = "Access is forbidden";
    const error = new Forbidden(message);
    const response = error.toResponse();

    expect(response.status).toBe(403);
    expect(response.statusText).toBe(message);
    expect(response.headers.get("Content-Type")).toBe("application/json");

    const body = await response.json();
    expect(body).toEqual({ name: "Forbidden", message });
  });

  it("should return a Response object from toJson", async () => {
    const message = "Access is forbidden";
    const error = new Forbidden(message);
    const response = error.toJson();

    expect(response.status).toBe(403);
    expect(response.statusText).toBe(message);

    const body = await response.json();
    expect(body).toEqual({ name: "Forbidden", message });
  });
});

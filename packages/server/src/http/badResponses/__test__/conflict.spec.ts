import { describe, expect, it } from "vitest";
import { Conflict } from "../conflict";

describe("Conflict", () => {
  it("should create an instance with the correct properties", () => {
    const message = "Conflict occurred";
    const cause = { reason: "Duplicate entry" };
    const error = new Conflict(message, cause);

    expect(error.body).toEqual({ name: "Conflict", message });
    expect(error.status).toBe(409);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBe(JSON.stringify(cause));
  });

  it("should create an instance without a cause", () => {
    const message = "Conflict occurred";
    const error = new Conflict(message);

    expect(error.body).toEqual({ name: "Conflict", message });
    expect(error.status).toBe(409);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBeUndefined();
  });

  it("should return a Response object from toResponse", async () => {
    const message = "Conflict occurred";
    const error = new Conflict(message);
    const response = error.toResponse();

    expect(response.status).toBe(409);
    expect(response.statusText).toBe(message);
    expect(response.headers.get("Content-Type")).toBe("application/json");

    const body = await response.json();
    expect(body).toEqual({ name: "Conflict", message });
  });

  it("should return a Response object from toJson", async () => {
    const message = "Conflict occurred";
    const error = new Conflict(message);
    const response = error.toJson();

    expect(response.status).toBe(409);
    expect(response.statusText).toBe(message);

    const body = await response.json();
    expect(body).toEqual({ name: "Conflict", message });
  });
});

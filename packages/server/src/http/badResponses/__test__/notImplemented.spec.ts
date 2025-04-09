import { describe, expect, it } from "vitest";
import { NotImplemented } from "../notImplemented";

describe("NotImplemented", () => {
  it("should create an instance with the correct properties", () => {
    const message = "Feature not implemented";
    const cause = { reason: "Under development" };
    const error = new NotImplemented(message, cause);

    expect(error.body).toEqual({ name: "NotImplemented", message });
    expect(error.status).toBe(501);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBe(JSON.stringify(cause));
  });

  it("should create an instance without a cause", () => {
    const message = "Feature not implemented";
    const error = new NotImplemented(message);

    expect(error.body).toEqual({ name: "NotImplemented", message });
    expect(error.status).toBe(501);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBeUndefined();
  });

  it("should return a Response object from toResponse", async () => {
    const message = "Feature not implemented";
    const error = new NotImplemented(message);
    const response = error.toResponse();

    expect(response.status).toBe(501);
    expect(response.statusText).toBe(message);
    expect(response.headers.get("Content-Type")).toBe("application/json");

    const body = await response.json();
    expect(body).toEqual({ name: "NotImplemented", message });
  });

  it("should return a Response object from toJson", async () => {
    const message = "Feature not implemented";
    const error = new NotImplemented(message);
    const response = error.toJson();

    expect(response.status).toBe(501);
    expect(response.statusText).toBe(message);

    const body = await response.json();
    expect(body).toEqual({ name: "NotImplemented", message });
  });
});

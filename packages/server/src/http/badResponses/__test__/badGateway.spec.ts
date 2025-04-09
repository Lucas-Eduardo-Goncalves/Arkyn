import { describe, expect, it } from "vitest";
import { BadGateway } from "../badGateway";

describe("BadGateway", () => {
  it("should create an instance with the correct properties", () => {
    const message = "Bad Gateway error occurred";
    const cause = { reason: "Upstream server is down" };
    const error = new BadGateway(message, cause);

    expect(error.body).toEqual({ name: "BadGateway", message });
    expect(error.status).toBe(502);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBe(JSON.stringify(cause));
  });

  it("should create an instance without a cause", () => {
    const message = "Bad Gateway error occurred";
    const error = new BadGateway(message);

    expect(error.body).toEqual({ name: "BadGateway", message });
    expect(error.status).toBe(502);
    expect(error.statusText).toBe(message);
    expect(error.cause).toBeUndefined();
  });

  it("should return a Response object from toResponse", () => {
    const message = "Bad Gateway error occurred";
    const error = new BadGateway(message);
    const response = error.toResponse();

    expect(response.status).toBe(502);
    expect(response.statusText).toBe(message);
    expect(response.headers.get("Content-Type")).toBe("application/json");
    response.json().then((body) => {
      expect(body).toEqual({ name: "BadGateway", message });
    });
  });

  it("should return a Response object from toJson", () => {
    const message = "Bad Gateway error occurred";
    const error = new BadGateway(message);
    const response = error.toJson();

    expect(response.status).toBe(502);
    expect(response.statusText).toBe(message);
    response.json().then((body) => {
      expect(body).toEqual({ name: "BadGateway", message });
    });
  });
});

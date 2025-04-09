import { describe, it, expect } from "vitest";
import { Created } from "../created";

describe("Created", () => {
  it("should create a response with default values", () => {
    const body = { message: "Resource created" };
    const created = new Created(body);

    const response = created.toResponse();
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Resource created successfully");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a response with custom values", () => {
    const body = { message: "Custom resource created" };
    const init = {
      headers: { "X-Custom-Header": "CustomValue" },
      status: 202,
      statusText: "Accepted",
    };
    const created = new Created(body, init);

    const response = created.toResponse();
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
    response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a JSON response with default values", () => {
    const body = { message: "Resource created" };
    const created = new Created(body);

    const response = created.toJson();
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Resource created successfully");
    response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a JSON response with custom values", () => {
    const body = { message: "Custom resource created" };
    const init = {
      headers: { "X-Custom-Header": "CustomValue" },
      status: 202,
      statusText: "Accepted",
    };
    const created = new Created(body, init);

    const response = created.toJson();
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });
});

import { describe, expect, it } from "vitest";
import { Success } from "../success";

describe("Success", () => {
  it("should create a response with default values", () => {
    const body = { message: "Success" };
    const success = new Success(body);

    const response = success.toResponse();
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    return response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a response with custom values", () => {
    const body = { message: "Custom Success" };
    const init = {
      headers: { "X-Custom-Header": "CustomValue" },
      status: 201,
      statusText: "Created",
    };
    const success = new Success(body, init);

    const response = success.toResponse();
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
    return response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a JSON response with default values using toJson", () => {
    const body = { message: "Success" };
    const success = new Success(body);

    const response = success.toJson();
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    return response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });

  it("should create a JSON response with custom values using toJson", () => {
    const body = { message: "Custom Success" };
    const init = {
      headers: { "X-Custom-Header": "CustomValue" },
      status: 201,
      statusText: "Created",
    };
    const success = new Success(body, init);

    const response = success.toJson();
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(response.headers.get("X-Custom-Header")).toBe("CustomValue");
    return response.json().then((data) => {
      expect(data).toEqual(body);
    });
  });
});

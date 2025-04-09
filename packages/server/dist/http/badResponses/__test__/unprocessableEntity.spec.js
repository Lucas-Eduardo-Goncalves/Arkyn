import { describe, expect, it } from "vitest";
import { UnprocessableEntity } from "../unprocessableEntity";
describe("UnprocessableEntity", () => {
    it("should create an instance with the correct properties", () => {
        const props = {
            message: "Validation failed",
            data: { invalidField: "email" },
            fieldErrors: { email: "Invalid format" },
            fields: { email: "example@domain" },
        };
        const error = new UnprocessableEntity(props);
        expect(error.body).toEqual({
            name: "UnprocessableEntity",
            message: props.message,
            data: props.data,
            fieldErrors: props.fieldErrors,
            fields: props.fields,
        });
        expect(error.status).toBe(422);
        expect(error.statusText).toBe(props.message);
    });
    it("should create an instance without optional properties", () => {
        const props = { message: "Validation failed" };
        const error = new UnprocessableEntity(props);
        expect(error.body).toEqual({
            name: "UnprocessableEntity",
            message: props.message,
            data: undefined,
            fieldErrors: undefined,
            fields: undefined,
        });
        expect(error.status).toBe(422);
        expect(error.statusText).toBe(props.message);
    });
    it("should return a Response object from toResponse", async () => {
        const props = { message: "Validation failed" };
        const error = new UnprocessableEntity(props);
        const response = error.toResponse();
        expect(response.status).toBe(422);
        expect(response.statusText).toBe(props.message);
        expect(response.headers.get("Content-Type")).toBe("application/json");
        const body = await response.json();
        expect(body).toEqual({
            name: "UnprocessableEntity",
            message: props.message,
            data: undefined,
            fieldErrors: undefined,
            fields: undefined,
        });
    });
    it("should return a Response object from toJson", async () => {
        const props = { message: "Validation failed" };
        const error = new UnprocessableEntity(props);
        const response = error.toJson();
        expect(response.status).toBe(422);
        expect(response.statusText).toBe(props.message);
        const body = await response.json();
        expect(body).toEqual({
            name: "UnprocessableEntity",
            message: props.message,
            data: undefined,
            fieldErrors: undefined,
            fields: undefined,
        });
    });
});

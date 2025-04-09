import { describe, expect, it } from "vitest";
import { getScopedParams } from "../getScopedParams";
describe("getScopedParams", () => {
    it("should return all query parameters when no scope is provided", () => {
        const request = {
            url: "https://example.com?key1=value1&key2=value2",
        };
        const params = getScopedParams(request);
        expect(params.get("key1")).toBe("value1");
        expect(params.get("key2")).toBe("value2");
        expect(params.toString()).toBe("key1=value1&key2=value2");
    });
    it("should return only scoped query parameters when a scope is provided", () => {
        const request = {
            url: "https://example.com?scope:key1=value1&scope:key2=value2&key3=value3",
        };
        const params = getScopedParams(request, "scope");
        expect(params.get("key1")).toBe("value1");
        expect(params.get("key2")).toBe("value2");
        expect(params.get("key3")).toBeNull();
        expect(params.toString()).toBe("key1=value1&key2=value2");
    });
    it("should return an empty URLSearchParams object if no parameters match the scope", () => {
        const request = {
            url: "https://example.com?key1=value1&key2=value2",
        };
        const params = getScopedParams(request, "scope");
        expect(params.toString()).toBe("");
    });
    it("should handle URLs with no query parameters", () => {
        const request = { url: "https://example.com" };
        const params = getScopedParams(request);
        expect(params.toString()).toBe("");
    });
    it("should handle URLs with query parameters but no matching scope", () => {
        const request = {
            url: "https://example.com?other:key1=value1&other:key2=value2",
        };
        const params = getScopedParams(request, "scope");
        expect(params.toString()).toBe("");
    });
    it("should handle special characters in query parameter keys and values", () => {
        const request = {
            url: "https://example.com?scope:key+1=value+1&scope:key+2=value+2",
        };
        const params = getScopedParams(request, "scope");
        expect(params.get("key 1")).toBe("value 1");
        expect(params.get("key 2")).toBe("value 2");
        expect(params.toString()).toBe("key+1=value+1&key+2=value+2");
    });
});

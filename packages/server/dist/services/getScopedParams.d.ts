import type { GetScopedParamsFunction } from "@arkyn/types";
/**
 * Extracts and returns scoped query parameters from a request URL.
 *
 * @param request - The incoming request object containing the URL.
 * @param scope - An optional string representing the scope prefix for filtering query parameters.
 *                If no scope is provided, all query parameters are returned.
 *
 * @returns A `URLSearchParams` object containing the scoped query parameters.
 *          If a scope is provided, only parameters with keys starting with the scope
 *          (e.g., `scope:key`) are included, and the scope prefix is removed from the keys.
 *          If no scope is provided, all query parameters are returned as-is.
 *
 * @example
 * // Example 1: No scope provided
 * const request = { url: "https://example.com?key1=value1&key2=value2" };
 * const params = getScopedParams(request);
 * console.log(params.toString()); // Output: "key1=value1&key2=value2"
 *
 * @example
 * // Example 2: Scope provided
 * const request = { url: "https://example.com?scope:key1=value1&scope:key2=value2&key3=value3" };
 * const params = getScopedParams(request, "scope");
 * console.log(params.toString()); // Output: "key1=value1&key2=value2"
 */
declare const getScopedParams: GetScopedParamsFunction;
export { getScopedParams };
//# sourceMappingURL=getScopedParams.d.ts.map
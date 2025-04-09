import type { MaskSensitiveDataFunction } from "@arkyn/types";
/**
 * Masks sensitive data in a JSON string by replacing the values of specified keys with "****".
 *
 * @param jsonString - The JSON string to be processed.
 * @param sensitiveKeys - An array of keys whose values should be masked. Defaults to `["password", "confirmPassword", "creditCard"]`.
 * @returns A JSON string with sensitive data masked. If the input is not a valid JSON string, it returns the original string.
 *
 * @example
 * ```typescript
 * const jsonString = JSON.stringify({
 *   username: "user123",
 *   password: "secret",
 *   profile: {
 *     creditCard: "1234-5678-9012-3456",
 *   },
 * });
 *
 * const result = maskSensitiveData(jsonString, ["password", "creditCard"]);
 * console.log(result);
 * // Output: '{"username":"user123","password":"****","profile":{"creditCard":"****"}}'
 * ```
 */
declare const maskSensitiveData: MaskSensitiveDataFunction;
export { maskSensitiveData };
//# sourceMappingURL=maskSensitiveData.d.ts.map
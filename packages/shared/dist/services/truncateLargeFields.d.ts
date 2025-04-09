import type { TruncateLargeFieldsFunction } from "@arkyn/types";
/**
 * Truncates large string fields in a JSON string to a specified maximum length.
 *
 * This function parses a JSON string, traverses its structure recursively, and truncates
 * any string fields that exceed the specified maximum length. If a string field is truncated,
 * it is replaced with a message indicating the original length of the field.
 *
 * @param jsonString - The JSON string to process.
 * @param maxLength - The maximum allowed length for string fields. Defaults to 1000.
 * @returns A JSON string with large string fields truncated.
 *
 * @throws {Error} Throws an error if the input is not a valid JSON string.
 *
 * @example
 * ```typescript
 * const json = JSON.stringify({
 *   name: "John",
 *   description: "A very long description that exceeds the maximum length...",
 *   nested: {
 *     details: "Another long string that needs truncation."
 *   }
 * });
 *
 * const result = truncateLargeFields(json, 50);
 * console.log(result);
 * // Output: '{"name":"John","description":"To large information: field as 57 characters","nested":{"details":"To large information: field as 43 characters"}}'
 * ```
 */
declare const truncateLargeFields: TruncateLargeFieldsFunction;
export { truncateLargeFields };
//# sourceMappingURL=truncateLargeFields.d.ts.map
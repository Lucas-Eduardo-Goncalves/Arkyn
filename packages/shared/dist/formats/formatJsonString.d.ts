import type { FormatJsonStringFunction } from "@arkyn/types";
/**
 * Formats a JSON string into a more readable format.
 *
 * This function attempts to parse the provided JSON string into a JavaScript object,
 * and then formats it using the `formatJsonObject` function. If the input string
 * is not a valid JSON, it logs an error to the console and returns an empty string.
 *
 * @param jsonString - The JSON string to be formatted.
 * @returns A formatted JSON string, or an empty string if the input is invalid.
 *
 * @throws Will log an error to the console if the input is not a valid JSON string.
 *
 * @example
 * ```typescript
 * const jsonString = '{"name":"John","age":30,"hobbies":["reading","gaming"]}';
 * const formatted = formatJsonString(jsonString);
 * console.log(formatted);
 * // Output:
 * // {
 * //   "name": "John",
 * //   "age": 30,
 * //   "hobbies": [
 * //     "reading",
 * //     "gaming"
 * //   ]
 * // }

 * const invalidJsonString = '{"name":"John", "age":30,';
 * const formatted = formatJsonString(invalidJsonString);
 * console.log(formatted);
 * // Output:
 * // (Logs "Invalid JSON string: ..." to the console)
 * // ""
 * ```
 */
declare const formatJsonString: FormatJsonStringFunction;
export { formatJsonString };
//# sourceMappingURL=formatJsonString.d.ts.map
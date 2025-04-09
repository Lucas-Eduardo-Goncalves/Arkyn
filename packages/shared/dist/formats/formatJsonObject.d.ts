import type { FormatJsonObjectFunction } from "@arkyn/types";
/**
 * Formats a JSON object into a human-readable string with proper indentation.
 *
 * @param obj - The JSON object or value to format. It can be an object, array, string, or primitive value.
 * @param indentLevel - The current level of indentation to apply. This is used recursively to format nested structures.
 * @returns A formatted string representation of the JSON object.
 *
 * @remarks
 * - If the input is an object, it will be formatted with keys and values properly indented.
 * - If the input is an array, each element will be formatted and indented on a new line.
 * - If the input is a string that can be parsed as JSON, it will attempt to parse and format it.
 * - Primitive values (e.g., numbers, booleans, null) will be converted to their string representation.
 *
 * @example
 * ```typescript
 * const obj = { name: "John", age: 30, hobbies: ["reading", "gaming"] };
 * const formatted = formatJsonObject(obj, 0);
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
 * ```
 */
declare const formatJsonObject: FormatJsonObjectFunction;
export { formatJsonObject };
//# sourceMappingURL=formatJsonObject.d.ts.map
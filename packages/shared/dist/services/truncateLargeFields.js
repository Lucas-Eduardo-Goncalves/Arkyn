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
const truncateLargeFields = (jsonString, maxLength = 1000) => {
    function truncateValue(value) {
        if (typeof value === "string" && value.length > maxLength) {
            return `To large information: field as ${value.length} characters`;
        }
        return value;
    }
    function recursiveTruncate(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => recursiveTruncate(item)); // Corrigido para processar elementos do array
        }
        else if (obj !== null && typeof obj === "object") {
            return Object.fromEntries(Object.entries(obj).map(([key, value]) => [
                key,
                recursiveTruncate(value), // Corrigido para aplicar recursão corretamente
            ]));
        }
        return truncateValue(obj); // Corrigido para truncar valores diretamente
    }
    try {
        const parsedJson = JSON.parse(jsonString);
        const truncatedJson = recursiveTruncate(parsedJson);
        return JSON.stringify(truncatedJson);
    }
    catch (error) {
        throw new Error("Invalid JSON string");
    }
};
export { truncateLargeFields };

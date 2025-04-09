import type { FormatToCepFunction } from "@arkyn/types";
/**
 * Formats a given string into a Brazilian postal code (CEP) format.
 *
 * The function removes all non-numeric characters from the input string
 * and attempts to format it as a CEP in the pattern `XXXXX-XXX`.
 * If the input does not match the expected format, an error is thrown.
 *
 * @param value - The input string to be formatted as a CEP.
 * @returns The formatted CEP string in the pattern `XXXXX-XXX`.
 * @throws {Error} If the input does not match the expected CEP format.
 *
 * @example
 * ```typescript
 * import { formatToCep } from "./formatToCep";
 *
 * const formattedCep = formatToCep("12345678");
 * console.log(formattedCep); // Output: "12345-678"
 *
 * try {
 *   formatToCep("1234");
 * } catch (error) {
 *   console.error(error.message); // Output: "Invalid CEP format"
 * }
 * ```
 */
declare const formatToCep: FormatToCepFunction;
export { formatToCep };
//# sourceMappingURL=formatToCep.d.ts.map
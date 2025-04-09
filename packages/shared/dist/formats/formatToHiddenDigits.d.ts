import type { FormatToHiddenDigitsFunction } from "@arkyn/types";
/**
 * Formats a string by hiding specific digits within a given range.
 *
 * This function takes a string input and replaces digits within a specified range
 * with a hiding character (e.g., "*"). Non-digit characters remain unchanged.
 *
 * @param value - The input string to be formatted.
 * @param options - Configuration options for formatting.
 * @param options.range - The range of digits to hide. It can be:
 *   - A single number (e.g., `3`), which hides the first `n` digits if positive,
 *     or the last `n` digits if negative.
 *   - A tuple `[start, end]` specifying the range of digits to hide (inclusive).
 *   - Defaults to `3`, hiding the first three digits.
 * @param options.hider - The character used to hide digits. Defaults to `"*"`.
 *
 * @returns The formatted string with specified digits hidden.
 *
 * @example
 * ```typescript
 * import { formatToHiddenDigits } from "./formatToHiddenDigits";
 *
 * formatToHiddenDigits("123-456-7890", { range: 3 });
 * // Output: "***-456-7890"
 *
 * formatToHiddenDigits("123-456-7890", { range: [4, 6], hider: "#" });
 * // Output: "123-###-7890"
 * ```
 */
declare const formatToHiddenDigits: FormatToHiddenDigitsFunction;
export { formatToHiddenDigits };
//# sourceMappingURL=formatToHiddenDigits.d.ts.map
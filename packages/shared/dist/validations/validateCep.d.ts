import type { ValidateCepFunction } from "@arkyn/types";
/**
 * Removes all non-digit characters from the CEP.
 * @param cep - Raw CEP string.
 * @returns Only numeric characters.
 */
/**
 * Validates a Brazilian CEP (Código de Endereçamento Postal).
 *
 * A valid CEP has 8 numeric digits.
 *
 * @param rawCep - CEP string, may include formatting (e.g., "12345-678").
 * @returns `true` if the CEP is valid, otherwise `false`.
 *
 * @example
 * ```ts
 * validateCep("12345-678"); // true
 * validateCep("12345678");  // true
 * validateCep("ABCDE-123"); // false
 * ```
 */
declare const validateCep: ValidateCepFunction;
export { validateCep };
//# sourceMappingURL=validateCep.d.ts.map
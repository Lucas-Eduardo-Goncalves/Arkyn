import type { ValidateCnpjFunction } from "@arkyn/types";
/**
 * Validates a Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 *
 * This function performs:
 * - Sanitization (removes non-digit characters).
 * - Length check (must be 14 digits).
 * - Repeating digits check (invalid if all digits are the same).
 * - Verifies the two check digits with the proper weights.
 *
 * @param rawCnpj - CNPJ string, possibly formatted.
 * @returns `true` if valid, otherwise `false`.
 *
 * @example
 * ```ts
 * validateCnpj("12.345.678/0001-95"); // false
 * validateCnpj("11.444.777/0001-61"); // true
 * ```
 */
declare const validateCnpj: ValidateCnpjFunction;
export { validateCnpj };
//# sourceMappingURL=validateCnpj.d.ts.map
import type { FormatToCpfCnpjFunction } from "@arkyn/types";
/**
 * Formats a given string value into either a CPF or CNPJ format based on its length.
 *
 * - If the input contains 11 numeric characters, it is formatted as a CPF.
 * - If the input contains 14 numeric characters, it is formatted as a CNPJ.
 * - Throws an error if the input length is neither 11 nor 14 after removing non-numeric characters.
 *
 * @param value - The string value to be formatted. It may contain non-numeric characters, which will be removed.
 * @returns The formatted CPF or CNPJ string.
 * @throws {Error} If the input does not have a valid CPF or CNPJ length.
 *
 * @example
 * ```typescript
 * formatToCpfCnpj("123.456.789-09"); // Returns "123.456.789-09" (CPF format)
 * formatToCpfCnpj("12.345.678/0001-95"); // Returns "12.345.678/0001-95" (CNPJ format)
 * formatToCpfCnpj("12345678909"); // Returns "123.456.789-09" (CPF format)
 * formatToCpfCnpj("12345678000195"); // Returns "12.345.678/0001-95" (CNPJ format)
 * formatToCpfCnpj("123"); // Throws an error: "Invalid CPF or CNPJ length"
 * ```
 */
declare const formatToCpfCnpj: FormatToCpfCnpjFunction;
export { formatToCpfCnpj };
//# sourceMappingURL=formatToCpfCnpj.d.ts.map
import type { FormatToCpfFunction } from "@arkyn/types";
/**
 * Formats a given string into a CPF (Cadastro de Pessoas Físicas) format.
 *
 * A CPF is a Brazilian individual taxpayer registry identification format.
 * This function ensures the input is cleaned of non-numeric characters and
 * then formats it into the standard CPF format: `XXX.XXX.XXX-XX`.
 *
 * @param value - The input string to be formatted as a CPF.
 * @returns The formatted CPF string.
 * @throws {Error} If the input string does not match the expected CPF format.
 *
 * @example
 * ```typescript
 * import { formatToCpf } from "./formatToCPF";
 *
 * const formattedCpf = formatToCpf("12345678909");
 * console.log(formattedCpf); // Output: "123.456.789-09"

 * try {
 *   const formattedCpf = formatToCpf("12345");
 * } catch (error) {
 *   console.error(error.message); // Output: "Invalid CPF format"
 * }
 *
 * ```
 */
declare const formatToCpf: FormatToCpfFunction;
export { formatToCpf };
//# sourceMappingURL=formatToCpf.d.ts.map
import { removeNonNumeric } from "../services/removeNonNumeric";

type FormatToCpfFunction = (value: string) => string;

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

const formatToCpf: FormatToCpfFunction = (value) => {
  const cleaned = removeNonNumeric(value);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

  if (match) return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  throw new Error("Invalid CPF format");
};

export { formatToCpf };

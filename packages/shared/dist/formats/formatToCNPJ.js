import { removeNonNumeric } from "../services/removeNonNumeric";
/**
 * Formats a given string or number into a CNPJ (Cadastro Nacional da Pessoa Jurídica) format.
 *
 * The CNPJ format is: `XX.XXX.XXX/XXXX-XX`, where `X` represents a digit.
 *
 * @param value - The input value to be formatted. It can be a string or number containing the CNPJ digits.
 *                Non-numeric characters will be removed before formatting.
 *
 * @returns A string formatted as a CNPJ.
 *
 * @throws {Error} Throws an error if the input does not contain exactly 14 numeric digits.
 *
 * @example
 * ```typescript
 * import { formatToCnpj } from "./formatToCNPJ";
 *
 * const formattedCnpj = formatToCnpj("12345678000195");
 * console.log(formattedCnpj); // Output: "12.345.678/0001-95"
 *
 * try {
 *   formatToCnpj("12345");
 * } catch (error) {
 *   console.error(error.message); // Output: "Invalid CNPJ length"
 * }
 * ```
 */
const formatToCnpj = (value) => {
    const cleaned = removeNonNumeric(value);
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
    if (match)
        return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
    throw new Error("Invalid CNPJ length");
};
export { formatToCnpj };

import type { ValidateCpfFunction } from "@arkyn/types";
/**
 * Validates a Brazilian CPF (Cadastro de Pessoas Físicas) number.
 *
 * The CPF is a unique identifier assigned to Brazilian citizens and residents.
 * This function checks if the provided CPF is valid by performing the following steps:
 * - Removes any non-digit characters from the input.
 * - Verifies if the CPF has the correct length (11 digits).
 * - Ensures that all digits are not the same (e.g., "111.111.111-11" is invalid).
 * - Calculates the first and second verification digits using the CPF algorithm.
 * - Compares the calculated verification digits with the ones provided in the CPF.
 *
 * @param rawCpf - The raw CPF string, which may include formatting characters (e.g., dots or dashes).
 * @returns `true` if the CPF is valid, otherwise `false`.
 *
 * @example
 * ```typescript
 * validateCpf("123.456.789-09"); // false
 * validateCpf("111.444.777-35"); // true
 * ```
 */
declare const validateCpf: ValidateCpfFunction;
export { validateCpf };
//# sourceMappingURL=validateCpf.d.ts.map
import type { ValidatePasswordFunction } from "@arkyn/types";
/**
 * Validates a password based on the following rules:
 * - At least 8 characters
 * - At least 1 uppercase letter
 * - At least 1 letter (any case)
 * - At least 1 number
 * - At least 1 special character
 *
 * @param rawPassword - The raw password string.
 * @returns `true` if password is valid, otherwise `false`.
 *
 * @example
 * ```ts
 * validatePassword("Senha@123"); // true
 * validatePassword("senha123");  // false (no uppercase, no special char)
 * ```
 */
declare const validatePassword: ValidatePasswordFunction;
export { validatePassword };
//# sourceMappingURL=validatePassword.d.ts.map
import type { ValidateRgFunction } from "@arkyn/types";
/**
 * Validates a Brazilian RG (Registro Geral) in a generic way.
 *
 * This function does a basic structure validation:
 * - Removes non-alphanumeric characters.
 * - Ensures length is reasonable (7–9 digits).
 * - Optionally allows for a final letter (verifier).
 *
 * @param rawRg - RG string, possibly formatted.
 * @returns `true` if format seems valid, otherwise `false`.
 *
 * @example
 * ```ts
 * validateRg("12.345.678-9"); // true
 * validateRg("MG-12.345.678"); // false (not supported)
 * validateRg("12345678X"); // true
 * ```
 */
declare const validateRg: ValidateRgFunction;
export { validateRg };
//# sourceMappingURL=validateRg.d.ts.map
import type { ValidatePhoneFunction } from "@arkyn/types";
/**
 * Validates a phone number against a list of country-specific formats.
 *
 * The function iterates through a predefined list of countries and checks if the
 * provided phone number matches the format for any of the countries. It uses
 * regular expressions to validate the phone number based on the country's code,
 * prefix, and mask.
 *
 * Special handling is applied for Brazilian phone numbers (ISO code "BR"), which
 * allows for an optional ninth digit.
 *
 * @param rawPhone - The phone number to validate as a string.
 * @returns `true` if the phone number matches any country's format, otherwise `false`.
 *
 * @example
 * ```typescript
 * import { validatePhone } from "./validatePhone";
 *
 * validatePhone("+55 32912345678"); // true for a valid Brazilian phone number
 * validatePhone("+55 3212345678"); // true for a valid Brazilian phone number
 * validatePhone("+1-684 1234567"); // true for a valid American Samoa phone number
 * validatePhone("+5532912345678"); // false for an invalid Brazilian phone number
 * validatePhone("+55 1234567890"); // false for an invalid Brazilian phone number
 * ```
 */
declare const validatePhone: ValidatePhoneFunction;
export { validatePhone };
//# sourceMappingURL=validatePhone.d.ts.map
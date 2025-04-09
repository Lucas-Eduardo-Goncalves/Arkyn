import type { FormatToPhoneFunction } from "@arkyn/types";
/**
 * Formats a phone number string based on the provided country code and optional prefix.
 *
 * The input string should follow the format: `"<countryCode>-<prefix> <phoneNumber>"` or `"<countryCode> <phoneNumber>"`.
 * The function determines the appropriate formatting mask based on the country and applies it to the phone number.
 *
 * @param prop - The phone number string to be formatted. It must include the country code and optionally a prefix.
 *               Example formats:
 *               - "+55-11 912345678"
 *               - "+1 1234567890"
 *
 * @returns The formatted phone number string based on the country's formatting rules.
 *
 * @throws {Error} If the input phone number does not match the expected format.
 * @throws {Error} If the country code or phone number is missing from the input string.
 * @throws {Error} If the provided country code and prefix combination is invalid.
 * @throws {Error} If the provided country code is invalid.
 * @throws {Error} If the provided country code has a prefix but none is supplied in the input.
 *
 * @example
 * ```typescript
 * import { formatToPhone } from "./formatToPhone";
 *
 * const formattedPhone1 = formatToPhone("+55 11912345678");
 * console.log(formattedPhone1); // Output: "(11) 91234-5678" (brazilian phone number format)
 *
 * const formattedPhone2 = formatToPhone("+1-123 4567890");
 * console.log(formattedPhone2); // Output: "(123) 456-7890" (us phone number format)
 * ```
 */
declare const formatToPhone: FormatToPhoneFunction;
export { formatToPhone };
//# sourceMappingURL=formatToPhone.d.ts.map
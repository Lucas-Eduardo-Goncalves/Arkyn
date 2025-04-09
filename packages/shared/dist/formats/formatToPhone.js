import { countries } from "@arkyn/templates";
import { removeNonNumeric } from "../services/removeNonNumeric";
function getMask(value) {
    const mask = value.length > 10 ? "NINE" : "EIGTH";
    return mask;
}
const TYPES = {
    EIGTH: "(99) 9999-9999",
    NINE: "(99) 99999-9999",
};
const MAX_LENGTH = removeNonNumeric(TYPES.NINE).length;
function applyMask(value, maskPattern) {
    let result = "";
    let digitIndex = 0;
    for (let i = 0; i < maskPattern.length; i++) {
        if (maskPattern[i] === "9") {
            if (digitIndex < value.length) {
                result += value[digitIndex];
                digitIndex++;
            }
            else {
                break;
            }
        }
        else {
            if (digitIndex < value.length) {
                result += maskPattern[i];
            }
            else {
                break;
            }
        }
    }
    return result;
}
function formatPhoneNumber(phoneNumber, country) {
    if (country.code === "+55") {
        let value = removeNonNumeric(phoneNumber);
        const mask = getMask(value);
        let nextLength = value.length;
        if (nextLength > MAX_LENGTH)
            return value;
        value = applyMask(value, TYPES[mask]);
        return value;
    }
    const mask = country.mask;
    let formattedNumber = mask;
    if (country.prefix) {
        const prefixRegex = /\$+/g;
        formattedNumber = formattedNumber.replace(prefixRegex, country.prefix);
    }
    for (let i = 0, j = 0; i < formattedNumber.length && j < phoneNumber.length; i++) {
        if (formattedNumber[i] === "_") {
            formattedNumber =
                formattedNumber.substring(0, i) +
                    phoneNumber[j] +
                    formattedNumber.substring(i + 1);
            j++;
        }
    }
    return formattedNumber;
}
function getCountryWithPrefixCode(countryCode, prefix) {
    const country = countries.find((country) => country.code === countryCode && country.prefix === prefix);
    if (!country)
        throw new Error("Invalid country code or prefix");
    if (country.prefix !== prefix) {
        throw new Error("Invalid country code or prefix");
    }
    if (!country.prefix) {
        throw new Error("Invalid country code or prefix");
    }
    return country;
}
function getCountryWithoutPrefixCode(countryCode) {
    const country = countries.find((country) => country.code === countryCode);
    if (!country)
        throw new Error("Invalid country code");
    if (country.prefix)
        throw new Error("Invalid country code");
    return country;
}
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
const formatToPhone = (prop) => {
    const phoneRegex = /^\+\d{1,4}(-\d{1,4})? \d+$/;
    if (!phoneRegex.test(prop)) {
        throw new Error("Invalid phone number format. Expected format: +<countryCode>-<optionalPrefix> <phoneNumber>");
    }
    const countryCode = prop.split(" ")[0].split("-")[0];
    const prefixCode = prop.split(" ")[0].split("-")[1];
    const phoneNumber = prop.split(" ")[1];
    if (!countryCode || !phoneNumber) {
        throw new Error("Invalid phone number format");
    }
    if (prefixCode) {
        const country = getCountryWithPrefixCode(countryCode, prefixCode);
        return formatPhoneNumber(phoneNumber, country);
    }
    const country = getCountryWithoutPrefixCode(countryCode);
    return formatPhoneNumber(phoneNumber, country);
};
export { formatToPhone };

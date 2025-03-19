import { countries } from "@arkyn/shared";
import { applyMask, clear, getMask, MAX_LENGTH, TYPES } from "./utils";
function formatPhoneNumber(phoneNumber, country) {
    if (country.code === "+55") {
        let value = clear(phoneNumber);
        const mask = getMask(value);
        let nextLength = value.length;
        if (nextLength > MAX_LENGTH)
            return;
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
        return null;
    return country;
}
function getCountryWithoutPrefixCode(countryCode) {
    const country = countries.find((country) => country.code === countryCode);
    if (!country)
        return null;
    return country;
}
function getDefaultFormatPhoneNumber(defaultValue) {
    // default value format is +COUNTRY_CODE-PREFIX_PHONE_NUMBER_OPTIONAL PHONE_NUMBER
    const countryCode = defaultValue.split(" ")[0].split("-")[0];
    const prefixCode = defaultValue.split(" ")[0].split("-")[1];
    const phoneNumber = defaultValue.split(" ")[1];
    if (!countryCode || !phoneNumber) {
        return { country: null, formattedNumber: "" };
    }
    if (prefixCode) {
        const country = getCountryWithPrefixCode(countryCode, prefixCode);
        if (!country)
            return { country: null, formattedNumber: "" };
        const formattedNumber = formatPhoneNumber(phoneNumber, country);
        const response = { country, formattedNumber };
        return response;
    }
    const country = getCountryWithoutPrefixCode(countryCode);
    if (!country)
        return { country: null, formattedNumber: "" };
    const formattedNumber = formatPhoneNumber(phoneNumber, country);
    const response = { country, formattedNumber };
    return response;
}
export { getDefaultFormatPhoneNumber };

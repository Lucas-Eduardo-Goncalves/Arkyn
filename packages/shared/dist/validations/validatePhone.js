import { countries } from "@arkyn/templates";
function validatePhone(phone) {
    for (const country of countries) {
        const countryCode = country.code;
        const prefix = country.prefix ? `-${country.prefix}` : "";
        const digitCount = country.mask.replace(/[^_]/g, "").length;
        if (country.iso === "BR") {
            const brazilRegex = new RegExp(`^\\${countryCode} \\d{2}9?\\d{8}$`);
            if (brazilRegex.test(phone))
                return true;
            continue;
        }
        const regex = new RegExp(`^\\${countryCode}${prefix} \\d{${digitCount}}$`);
        if (regex.test(phone))
            return true;
    }
    return false;
}
export { validatePhone };

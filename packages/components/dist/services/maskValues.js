import { formatCurrency } from "./format";
import { normalizeValue } from "./normalizeValue";
const maskValues = (locale, inputFieldValue, currency) => {
    if (!inputFieldValue)
        return [0, ""];
    const value = normalizeValue(inputFieldValue);
    const maskedValue = formatCurrency(locale, value, currency);
    return [value, maskedValue];
};
export { maskValues };

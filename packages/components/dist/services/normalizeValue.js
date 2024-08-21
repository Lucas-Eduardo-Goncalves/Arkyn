import { MAXIMUM_FRACTION_DIGITS } from "../constants/decimals";
import { clearNumber } from "./clearNumber";
const normalizeValue = (number) => {
    let safeNumber = number;
    if (typeof number === "string") {
        safeNumber = clearNumber(number);
        if (safeNumber % 1 !== 0) {
            safeNumber = safeNumber.toFixed(MAXIMUM_FRACTION_DIGITS);
        }
    }
    else {
        safeNumber = Number.isInteger(number)
            ? Number(number) * 10 ** MAXIMUM_FRACTION_DIGITS
            : number.toFixed(MAXIMUM_FRACTION_DIGITS);
    }
    return clearNumber(safeNumber) / 10 ** MAXIMUM_FRACTION_DIGITS;
};
export { normalizeValue };

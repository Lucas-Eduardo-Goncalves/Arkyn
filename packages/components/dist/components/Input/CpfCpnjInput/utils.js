function clear(value) {
    return value && value.replace(/[^0-9]/g, "");
}
function applyMask(value, mask) {
    let result = "";
    let inc = 0;
    Array.from(value).forEach((letter, index) => {
        if (!mask[index + inc].match(/[0-9]/)) {
            result += mask[index + inc];
            inc++;
        }
        result += letter;
    });
    return result;
}
function getMask(value) {
    return value.length > 11 ? "CNPJ" : "CPF";
}
const TYPES = {
    CPF: "999.999.999-999",
    CNPJ: "99.999.999/9999-99",
};
const MAX_LENGTH = clear(TYPES.CNPJ).length;
export { clear, applyMask, MAX_LENGTH, TYPES, getMask };

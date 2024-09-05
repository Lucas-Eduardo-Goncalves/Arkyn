import { parseToCharacters } from "../parsers/parseToCharacters";
import { normalizeRange, within } from "../services/range";
const formatToHiddenDigits = (value, options = {}) => {
    const characters = parseToCharacters(value);
    const range = normalizeRange(options.range ?? 3, characters.digits);
    return characters.children
        .map((node) => {
        if (node.kind === "digit" && within(range, node.digit))
            return options.hider ?? "*";
        return node.character;
    })
        .join("");
};
export { formatToHiddenDigits };

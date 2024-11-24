const DIGIT = /^\d$/;
const parseToCharacters = (value) => {
    let digits = 0;
    const children = value
        .split("")
        .map((character) => {
        if (DIGIT.test(character))
            return { character, kind: "digit", digit: ++digits };
        return { character, kind: "other" };
    });
    return { digits, children, kind: "root" };
};
export { parseToCharacters };

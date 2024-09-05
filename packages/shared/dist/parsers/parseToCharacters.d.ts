type DigitCharacterNode = {
    kind: "digit";
    digit: number;
    character: string;
};
type OtherCharacterNode = {
    kind: "other";
    character: string;
};
type RootCharacterNode = {
    kind: "root";
    digits: number;
    children: (DigitCharacterNode | OtherCharacterNode)[];
};
declare const parseToCharacters: (value: string) => RootCharacterNode;
export { parseToCharacters };
//# sourceMappingURL=parseToCharacters.d.ts.map
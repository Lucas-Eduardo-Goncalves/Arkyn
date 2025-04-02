import type { FormatToHiddenDigitsOptions } from "@arkyn/types";

const DIGIT = /^\d$/;

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

const parseToCharacters = (value: string): RootCharacterNode => {
  let digits = 0;

  const children = value
    .split("")
    .map((character: string): DigitCharacterNode | OtherCharacterNode => {
      if (DIGIT.test(character))
        return { character, kind: "digit", digit: ++digits };
      return { character, kind: "other" };
    });

  return { digits, children, kind: "root" };
};

const normalizeRange = (
  range: number | [number, number],
  limit: number
): [number, number] => {
  if (Array.isArray(range)) return range;

  if (range >= 0) return [0, range];

  return [limit + 1 - Math.abs(range), limit];
};

const within = (range: [number, number], value: number): boolean =>
  value >= range[0] && value <= range[1];

const formatToHiddenDigits = (
  value: string,
  options: FormatToHiddenDigitsOptions = {}
): string => {
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

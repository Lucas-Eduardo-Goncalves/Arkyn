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

type FormatToHiddenDigitsFunction = (
  value: string,
  options: { range?: number | [number, number]; hider?: string }
) => string;

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

/**
 * Formats a string by hiding specific digits within a given range.
 *
 * This function takes a string input and replaces digits within a specified range
 * with a hiding character (e.g., "*"). Non-digit characters remain unchanged.
 *
 * @param value - The input string to be formatted.
 * @param options - Configuration options for formatting.
 * @param options.range - The range of digits to hide. It can be:
 *   - A single number (e.g., `3`), which hides the first `n` digits if positive,
 *     or the last `n` digits if negative.
 *   - A tuple `[start, end]` specifying the range of digits to hide (inclusive).
 *   - Defaults to `3`, hiding the first three digits.
 * @param options.hider - The character used to hide digits. Defaults to `"*"`.
 *
 * @returns The formatted string with specified digits hidden.
 *
 * @example
 * ```typescript
 * import { formatToHiddenDigits } from "./formatToHiddenDigits";
 *
 * formatToHiddenDigits("123-456-7890", { range: 3 });
 * // Output: "***-456-7890"
 *
 * formatToHiddenDigits("123-456-7890", { range: [4, 6], hider: "#" });
 * // Output: "123-###-7890"
 * ```
 */

const formatToHiddenDigits: FormatToHiddenDigitsFunction = (value, options) => {
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

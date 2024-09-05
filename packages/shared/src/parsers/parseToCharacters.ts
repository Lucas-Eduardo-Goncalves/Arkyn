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

export { parseToCharacters };

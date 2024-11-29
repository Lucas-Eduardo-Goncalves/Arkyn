type RichTextHiddenButtonKey =
  | "headingOne"
  | "headingTwo"
  | "blockQuote"
  | "bold"
  | "italic"
  | "underline"
  | "code"
  | "left"
  | "right"
  | "center"
  | "justify";

type ElementFormatType =
  | "blockQuote"
  | "bulletedList"
  | "headingOne"
  | "headingTwo"
  | "listItem"
  | "numberedList"
  | "paragraph";

type AlignFormatType = "center" | "left" | "right" | "justify";

type CustomElement = {
  type: ElementFormatType;
  align?: AlignFormatType;
  children?: any;
};

type CustomText = {
  bold?: boolean;
  text: string;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
};

type Descendant = CustomElement | CustomText;

type RichTextProps = {
  name: string;
  hiddenButtons?: RichTextHiddenButtonKey[];
  maxLimit?: number;
  enforceCharacterLimit?: boolean;
  defaultValue?: string;
  isError?: boolean;
  onChangeCharactersCount?: (e: number) => void;
  onChange?: (value: Descendant[]) => void;
};

type RichTextValue = Descendant[];

export type { RichTextProps, RichTextHiddenButtonKey, RichTextValue };

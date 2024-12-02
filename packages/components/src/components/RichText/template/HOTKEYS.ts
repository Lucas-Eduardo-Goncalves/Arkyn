import { RichTextMarkFormatType } from "@arkyn/types";

type HotKeys = {
  [key: string]: RichTextMarkFormatType;
};

const HOTKEYS: HotKeys = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

export { HOTKEYS };

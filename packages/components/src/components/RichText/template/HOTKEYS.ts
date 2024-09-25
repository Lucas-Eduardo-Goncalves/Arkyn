import { MarkFormatType } from "../defineType";

type HotKeys = {
  [key: string]: MarkFormatType;
};

const HOTKEYS: HotKeys = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

export { HOTKEYS };

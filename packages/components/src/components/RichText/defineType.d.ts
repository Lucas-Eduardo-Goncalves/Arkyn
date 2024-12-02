import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

import { RichTextCustomElement, RichTextCustomText } from "@arkyn/types";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: RichTextCustomElement;
    Text: RichTextCustomText;
  }
}

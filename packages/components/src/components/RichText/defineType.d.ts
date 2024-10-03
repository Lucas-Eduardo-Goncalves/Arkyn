import { HtmlHTMLAttributes } from "react";
import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

type ElementFormatType =
  | "blockQuote"
  | "bulletedList"
  | "headingOne"
  | "headingTwo"
  | "listItem"
  | "numberedList"
  | "paragraph";

type AlignFormatType = "center" | "left" | "right" | "justify";

type MarkFormatType = "bold" | "italic" | "underline" | "code";

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

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

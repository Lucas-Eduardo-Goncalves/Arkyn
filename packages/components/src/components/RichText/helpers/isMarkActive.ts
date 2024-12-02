import { RichTextMarkFormatType } from "@arkyn/types";
import { Editor } from "slate";

function isMarkActive(editor: Editor, format: RichTextMarkFormatType) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

export { isMarkActive };

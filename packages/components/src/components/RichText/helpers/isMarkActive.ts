import { Editor } from "slate";
import { MarkFormatType } from "../defineType";

function isMarkActive(editor: Editor, format: MarkFormatType) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

export { isMarkActive };

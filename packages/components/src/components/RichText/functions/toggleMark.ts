import { RichTextMarkFormatType } from "@arkyn/types";
import { Editor } from "slate";

import { isMarkActive } from "../helpers/isMarkActive";

function toggleMark(editor: Editor, format: RichTextMarkFormatType) {
  const isActive = isMarkActive(editor, format);

  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
}

export { toggleMark };

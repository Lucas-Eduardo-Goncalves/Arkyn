import { Editor } from "slate";

import { MarkFormatType } from "../defineType";
import { isMarkActive } from "../helpers/isMarkActive";

function toggleMark(editor: Editor, format: MarkFormatType) {
  const isActive = isMarkActive(editor, format);

  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
}

export { toggleMark };

import { Editor } from "slate";
import { Element as SlateElement } from "slate";

import { AlignFormatType, ElementFormatType } from "../defineType";

function isBlockActive(
  editor: Editor,
  format: ElementFormatType | AlignFormatType,
  blockType: "type" | "align" = "type"
) {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
}

export { isBlockActive };

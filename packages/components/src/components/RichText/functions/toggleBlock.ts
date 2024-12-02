import {
  RichTextAlignFormatType,
  RichTextElementFormatType,
} from "@arkyn/types";
import { Editor, Element as SlateElement, Transforms } from "slate";

import { isBlockActive } from "../helpers/isBlockActive";
import { LIST_TYPES } from "../template/LIST_TYPES";
import { TEXT_ALIGN_TYPES } from "../template/TEXT_ALIGN_TYPES";

function toggleBlock(
  editor: Editor,
  format: RichTextElementFormatType | RichTextAlignFormatType
) {
  const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
  const isActive = isBlockActive(editor, format, blockType);

  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  let newProperties: Partial<SlateElement>;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    const formatType = format as RichTextAlignFormatType;
    newProperties = { align: isActive ? undefined : formatType };
  } else {
    const formatType = format as RichTextElementFormatType;
    newProperties = {
      type: isActive ? "paragraph" : isList ? "listItem" : formatType,
    };
  }

  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format as RichTextElementFormatType, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}

export { toggleBlock };

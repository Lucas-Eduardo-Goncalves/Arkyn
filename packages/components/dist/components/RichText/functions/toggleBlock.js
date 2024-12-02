import { Editor, Element as SlateElement, Transforms } from "slate";
import { isBlockActive } from "../helpers/isBlockActive";
import { LIST_TYPES } from "../template/LIST_TYPES";
import { TEXT_ALIGN_TYPES } from "../template/TEXT_ALIGN_TYPES";
function toggleBlock(editor, format) {
    const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
    const isActive = isBlockActive(editor, format, blockType);
    const isList = LIST_TYPES.includes(format);
    Transforms.unwrapNodes(editor, {
        match: (n) => !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    });
    let newProperties;
    if (TEXT_ALIGN_TYPES.includes(format)) {
        const formatType = format;
        newProperties = { align: isActive ? undefined : formatType };
    }
    else {
        const formatType = format;
        newProperties = {
            type: isActive ? "paragraph" : isList ? "listItem" : formatType,
        };
    }
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
}
export { toggleBlock };

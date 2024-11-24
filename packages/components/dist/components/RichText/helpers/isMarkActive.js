import { Editor } from "slate";
function isMarkActive(editor, format) {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
}
export { isMarkActive };

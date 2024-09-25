import { jsx as _jsx } from "react/jsx-runtime";
import { useSlate } from "slate-react";
import { toggleBlock } from "../../functions/toggleBlock";
import { isBlockActive } from "../../helpers/isBlockActive";
import { TEXT_ALIGN_TYPES } from "../../template/TEXT_ALIGN_TYPES";
import "./styles.css";
function BlockButton({ format, icon: Icon }) {
    const editor = useSlate();
    const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
    const isActive = isBlockActive(editor, format, blockType);
    const activeClass = isActive ? "activeTrue" : "activeFalse";
    function handleMouseDown(event) {
        event.preventDefault();
        toggleBlock(editor, format);
    }
    return (_jsx("button", { type: "button", className: "arkynRichTextBlockButton " + activeClass, onMouseDown: handleMouseDown, children: _jsx(Icon, {}) }));
}
export { BlockButton };

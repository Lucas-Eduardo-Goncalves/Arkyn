import { jsx as _jsx } from "react/jsx-runtime";
import { useSlate } from "slate-react";
import { toggleMark } from "../../functions/toggleMark";
import { isMarkActive } from "../../helpers/isMarkActive";
import "./styles.css";
function MarkButton({ format, icon: Icon }) {
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);
    const activeClass = isActive ? "activeTrue" : "activeFalse";
    function handleMouseDown(event) {
        event.preventDefault();
        toggleMark(editor, format);
    }
    return (_jsx("button", { type: "button", className: "arkynRichTextMarkButton " + activeClass, onMouseDown: handleMouseDown, children: _jsx(Icon, {}) }));
}
export { MarkButton };

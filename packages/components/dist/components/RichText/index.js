import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import isHotkey from "is-hotkey";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Italic, Quote, Underline, } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { BlockButton } from "./components/BlockButton/intex";
import { Element } from "./components/Element";
import { Leaf } from "./components/Leaf";
import { MarkButton } from "./components/MarkButton";
import { Toolbar } from "./components/Toolbar";
import { toggleMark } from "./functions/toggleMark";
import { HOTKEYS } from "./template/HOTKEYS";
import { INITIAL_VALUE } from "./template/INITIAL_VALUE";
import "./styles.css";
import { useFormController } from "../Form/FormController";
function RichText({ name, defaultValue, onValueChange, onChange, isError: baseIsError, }) {
    const [editorValue, setEditorValue] = useState([]);
    const [onFocus, setOnFocus] = useState(false);
    const { id, inputRef, error } = useFormController();
    const baseRef = useRef(null);
    const ref = inputRef || baseRef;
    const isError = baseIsError || !!error;
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const renderLeaf = useCallback(Leaf, []);
    const renderElement = useCallback(Element, []);
    function handleChange(e) {
        setEditorValue(e);
        onChange && onChange(e);
        onValueChange && onValueChange(JSON.stringify(e));
    }
    const errorClass = isError ? "errorTrue" : "errorFalse";
    const focusClass = onFocus ? "focusTrue" : "focusFalse";
    const className = `arkynRichText ${errorClass} ${focusClass}`;
    return (_jsxs(Slate, { editor: editor, initialValue: defaultValue ? JSON.parse(defaultValue) : INITIAL_VALUE, onChange: handleChange, onValueChange: handleChange, children: [_jsxs("div", { className: className, children: [_jsxs(Toolbar, { children: [_jsx(BlockButton, { format: "headingOne", icon: Heading1 }), _jsx(BlockButton, { format: "headingTwo", icon: Heading2 }), _jsx(BlockButton, { format: "blockQuote", icon: Quote }), _jsx(MarkButton, { format: "bold", icon: Bold }), _jsx(MarkButton, { format: "italic", icon: Italic }), _jsx(MarkButton, { format: "underline", icon: Underline }), _jsx(MarkButton, { format: "code", icon: Code }), _jsx(BlockButton, { format: "left", icon: AlignLeft }), _jsx(BlockButton, { format: "right", icon: AlignRight }), _jsx(BlockButton, { format: "center", icon: AlignCenter }), _jsx(BlockButton, { format: "justify", icon: AlignJustify })] }), _jsx(Editable, { className: "editorContainer", renderElement: renderElement, renderLeaf: renderLeaf, spellCheck: true, autoFocus: true, id: id, onFocus: () => setOnFocus(true), onBlur: () => setOnFocus(false), onKeyDown: (event) => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault();
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark);
                                }
                            }
                        } })] }), _jsx("input", { ref: ref, type: "hidden", name: name, value: JSON.stringify(editorValue) })] }));
}
export { RichText };

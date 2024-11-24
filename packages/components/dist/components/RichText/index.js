import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import isHotkey from "is-hotkey";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Italic, Quote, Underline, } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { createEditor, Transforms } from "slate";
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
import { useFormController } from "../Form/FormController";
import "./styles.css";
import { getSlateFromHtml } from "./functions/deserialize";
import { extractText } from "./functions/extractText";
import { getHtmlFromSlate } from "./functions/serialize";
import { isHtml } from "./functions/isHtml";
function RichText({ name, defaultValue, enforceCharacterLimit = false, onChangeCharactersCount, maxLimit = 2000, onValueChange, onChange, isError: baseIsError, }) {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const { id, inputRef, error } = useFormController();
    const baseRef = useRef(null);
    const defaultNodes = isHtml(defaultValue)
        ? getSlateFromHtml(defaultValue)
        : INITIAL_VALUE;
    const textFromNodes = extractText(defaultNodes);
    const [charactersCount, setCharactersCount] = useState(textFromNodes.length);
    const [inputValue, setInputValue] = useState(isHtml(defaultValue) ? defaultValue : "");
    const [onFocus, setOnFocus] = useState(false);
    const ref = inputRef || baseRef;
    const isError = baseIsError || !!error;
    const renderLeaf = useCallback(Leaf, []);
    const renderElement = useCallback(Element, []);
    function handleChange(value) {
        const text = extractText(value);
        setCharactersCount(text.length);
        onChangeCharactersCount && onChangeCharactersCount(text.length);
        if (enforceCharacterLimit && text.length >= maxLimit) {
            return;
        }
        else {
            setInputValue(getHtmlFromSlate(editor));
            onChange && onChange(value);
            onValueChange && onValueChange(getHtmlFromSlate(editor));
            editor.children = value;
            Transforms.setNodes(editor, { children: value });
        }
    }
    const focusClass = onFocus ? "focusTrue" : "focusFalse";
    const errorClass = isError
        ? "errorTrue"
        : maxLimit < charactersCount
            ? "errorTrue"
            : "errorFalse";
    const className = `arkynRichText ${errorClass} ${focusClass}`;
    const restatesCharacters = maxLimit - charactersCount;
    return (_jsxs(Slate, { editor: editor, initialValue: defaultNodes, onChange: handleChange, onValueChange: handleChange, children: [_jsxs("div", { className: className, children: [_jsxs(Toolbar, { children: [_jsx(BlockButton, { format: "headingOne", icon: Heading1 }), _jsx(BlockButton, { format: "headingTwo", icon: Heading2 }), _jsx(BlockButton, { format: "blockQuote", icon: Quote }), _jsx(MarkButton, { format: "bold", icon: Bold }), _jsx(MarkButton, { format: "italic", icon: Italic }), _jsx(MarkButton, { format: "underline", icon: Underline }), _jsx(MarkButton, { format: "code", icon: Code }), _jsx(BlockButton, { format: "left", icon: AlignLeft }), _jsx(BlockButton, { format: "right", icon: AlignRight }), _jsx(BlockButton, { format: "center", icon: AlignCenter }), _jsx(BlockButton, { format: "justify", icon: AlignJustify })] }), _jsx(Editable, { className: "editorContainer", renderElement: renderElement, renderLeaf: renderLeaf, spellCheck: true, id: id, onFocus: () => setOnFocus(true), onBlur: () => setOnFocus(false), onKeyDown: (event) => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault();
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark);
                                }
                            }
                        } }), restatesCharacters < 0 && (_jsx("div", { className: "restatesCharacters", children: restatesCharacters }))] }), _jsx("input", { ref: ref, type: "hidden", name: name, value: inputValue }), _jsx("input", { type: "hidden", name: `${name}Count`, value: charactersCount })] }));
}
export { RichText };

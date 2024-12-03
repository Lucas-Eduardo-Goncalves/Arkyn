import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import isHotkey from "is-hotkey";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Italic, Quote, Underline, } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { createEditor, Transforms } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { useFormController } from "../Form/FormController";
import { BlockButton } from "./components/BlockButton";
import { Element } from "./components/Element";
import { InsertImage } from "./components/InsertImage";
import { Leaf } from "./components/Leaf";
import { MarkButton } from "./components/MarkButton";
import { Toolbar } from "./components/Toolbar";
import { extractText } from "./functions/extractText";
import { toggleMark } from "./functions/toggleMark";
import { HOTKEYS } from "./template/HOTKEYS";
import { INITIAL_VALUE } from "./template/INITIAL_VALUE";
import "./styles.css";
function RichText(props) {
    const { name, hiddenButtons, imageConfig, defaultValue = "[]", enforceCharacterLimit = false, onChangeCharactersCount, maxLimit = 2000, onChange, isError: baseIsError, } = props;
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const { id, inputRef, error } = useFormController();
    const baseRef = useRef(null);
    function getDefaultNodes() {
        try {
            const parsedNodes = JSON.parse(defaultValue);
            if (!Array.isArray(parsedNodes))
                return INITIAL_VALUE;
            if (parsedNodes.length <= 0)
                return INITIAL_VALUE;
            const isValidNodes = parsedNodes.every((node) => typeof node === "object" &&
                node !== null &&
                "type" in node &&
                "children" in node);
            return isValidNodes ? parsedNodes : INITIAL_VALUE;
        }
        catch (error) {
            return INITIAL_VALUE;
        }
    }
    const textFromNodes = extractText(getDefaultNodes());
    const [charactersCount, setCharactersCount] = useState(textFromNodes.length);
    const [inputValue, setInputValue] = useState(JSON.stringify(getDefaultNodes()) || "[]");
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
            setInputValue(JSON.stringify(value));
            onChange && onChange(value);
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
    function buttonIsNotHidden(format) {
        return !hiddenButtons?.includes(format);
    }
    return (_jsxs(Slate, { editor: editor, initialValue: getDefaultNodes(), onChange: handleChange, onValueChange: handleChange, children: [_jsxs("div", { className: className, children: [_jsxs(Toolbar, { children: [buttonIsNotHidden("headingOne") && (_jsx(BlockButton, { format: "headingOne", icon: Heading1 })), buttonIsNotHidden("headingTwo") && (_jsx(BlockButton, { format: "headingTwo", icon: Heading2 })), buttonIsNotHidden("blockQuote") && (_jsx(BlockButton, { format: "blockQuote", icon: Quote })), buttonIsNotHidden("bold") && (_jsx(MarkButton, { format: "bold", icon: Bold })), buttonIsNotHidden("italic") && (_jsx(MarkButton, { format: "italic", icon: Italic })), buttonIsNotHidden("underline") && (_jsx(MarkButton, { format: "underline", icon: Underline })), buttonIsNotHidden("code") && (_jsx(MarkButton, { format: "code", icon: Code })), buttonIsNotHidden("left") && (_jsx(BlockButton, { format: "left", icon: AlignLeft })), buttonIsNotHidden("right") && (_jsx(BlockButton, { format: "right", icon: AlignRight })), buttonIsNotHidden("center") && (_jsx(BlockButton, { format: "center", icon: AlignCenter })), buttonIsNotHidden("justify") && (_jsx(BlockButton, { format: "justify", icon: AlignJustify })), imageConfig && buttonIsNotHidden("image") && (_jsx(InsertImage, { ...imageConfig }))] }), _jsx(Editable, { className: "editorContainer", renderElement: renderElement, renderLeaf: renderLeaf, spellCheck: true, id: id, onFocus: () => setOnFocus(true), onBlur: () => setOnFocus(false), onKeyDown: (event) => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault();
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark);
                                }
                            }
                        } }), restatesCharacters < 0 && (_jsx("div", { className: "restatesCharacters", children: restatesCharacters }))] }), _jsx("input", { type: "hidden", ref: ref, name: name, value: inputValue }), _jsx("input", { type: "hidden", name: `${name}Count`, value: charactersCount })] }));
}
export { RichText };

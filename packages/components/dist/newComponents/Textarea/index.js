import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { getConfig } from "./getConfig";
import { useFormController } from "../Form/FormController";
import "./styles.css";
function Textarea(props) {
    const [isFocused, setIsFocused] = useState(false);
    const baseRef = useRef(null);
    const { inputRef, id, error } = useFormController();
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, readOnly, onFocus, onBlur, ...rest } = getConfig({ ...props, id, isError }, isFocused);
    function handleSectionClick() {
        if (disabled || !ref?.current)
            return;
        setIsFocused(true);
        ref.current.focus();
    }
    function handleFocus(e) {
        setIsFocused(true);
        if (onFocus)
            onFocus(e);
    }
    function handleBlur(e) {
        setIsFocused(false);
        if (onBlur)
            onBlur(e);
    }
    return (_jsx("section", { title: title, style: style, onClick: handleSectionClick, className: className, children: _jsx("textarea", { disabled: disabled, readOnly: readOnly, ref: ref, onFocus: handleFocus, onBlur: handleBlur, ...rest }) }));
}
export { Textarea };

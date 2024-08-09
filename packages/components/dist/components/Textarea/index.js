import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useFormController } from "../Form/FormController";
import "./styles.css";
function Textarea(props) {
    const { variant = "solid", size = "md", className: baseClassName, disabled = false, readOnly = false, onFocus, onBlur, title, style, ...rest } = props;
    const [isFocused, setIsFocused] = useState(false);
    const { inputRef, id, error } = useFormController();
    const baseRef = useRef(null);
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const errored = isError ? "errored" : "";
    const opacity = disabled || readOnly ? "opacity" : "";
    const focused = isFocused ? "focused" : "";
    const className = `arkyn_textarea ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;
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
    return (_jsx("section", { title: title, style: style, onClick: handleSectionClick, className: className, children: _jsx("textarea", { id: id, disabled: disabled, readOnly: readOnly, ref: ref, onFocus: handleFocus, onBlur: handleBlur, ...rest }) }));
}
export { Textarea };

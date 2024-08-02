import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useFormController } from "../../../newComponents/Form/FormController";
import { getConfig } from "./getConfig";
import { MAX_LENGTH, TYPES, applyMask, clear, getMask } from "./utils";
function CpfCnpjInput(props) {
    const [isFocused, setIsFocused] = useState(false);
    const baseRef = useRef(null);
    const { inputRef, id, error } = useFormController();
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, sufix, iconSize, loadingPosition, isLoading, LeftIcon, readOnly, onFocus, onBlur, RightIcon, Spinner, onChange, value, defaultValue, ...rest } = getConfig({ ...props, id, isError }, isFocused);
    const [inputValue, setInputValue] = useState(defaultValue);
    const showLeftIcon = LeftIcon && !isLoading;
    const showRightIcon = RightIcon && !isLoading;
    const showLeftSpinner = loadingPosition === "left" && isLoading;
    const showRightSpinner = loadingPosition === "right" && isLoading;
    function handleSectionClick() {
        if (disabled || !ref?.current)
            return;
        setIsFocused(true);
        ref.current.focus();
    }
    function handleChange(event) {
        let value = clear(event.target.value);
        const mask = getMask(value);
        let nextLength = value.length;
        if (nextLength > MAX_LENGTH)
            return;
        value = applyMask(value, TYPES[mask]);
        event.target.value = value;
        setInputValue(value);
        onChange && onChange(event);
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
    return (_jsxs("section", { title: title, style: style, onClick: handleSectionClick, className: className, children: [prefix, showLeftSpinner && Spinner, showLeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsx("input", { disabled: disabled || isLoading, readOnly: readOnly, ref: ref, value: value || inputValue, onFocus: handleFocus, onChange: handleChange, onBlur: handleBlur, ...rest }), showRightIcon && _jsx(RightIcon, { size: iconSize, strokeWidth: 2.5 }), showRightSpinner && Spinner, sufix] }));
}
export { CpfCnpjInput };

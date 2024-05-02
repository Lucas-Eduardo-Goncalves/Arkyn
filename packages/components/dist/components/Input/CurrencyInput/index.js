import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useFormController } from "../../Form/FormController";
import { getConfig } from "./getConfig";
import { currencyInputKeyDown, valueDisplay } from "./utils";
function CurrencyInput(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [currencyValue, setCurrencyValue] = useState(props.defaultValue || 0);
    const baseRef = useRef(null);
    const { inputRef, id, error } = useFormController();
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, sufix, iconSize, loadingPosition, isLoading, LeftIcon, readOnly, onFocus, onBlur, RightIcon, Spinner, value, max, onKeyDown, onChange, showCents, ...rest } = getConfig({ ...props, id, isError }, isFocused);
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
    function handleKeyDown(event) {
        currencyInputKeyDown({ currencyValue, event, max, setCurrencyValue });
        onChange && onChange(currencyValue);
        onKeyDown && onKeyDown(event);
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
    return (_jsxs("section", { title: title, style: style, onClick: handleSectionClick, className: className, children: [prefix, showLeftSpinner && Spinner, showLeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsx("input", { value: valueDisplay(value || currencyValue, showCents), onKeyDown: handleKeyDown, disabled: disabled || isLoading, readOnly: readOnly, ref: ref, onFocus: handleFocus, onChange: () => { }, onBlur: handleBlur, ...rest }), showRightSpinner && Spinner, showRightIcon && _jsx(RightIcon, { size: iconSize, strokeWidth: 2.5 }), sufix] }));
}
export { CurrencyInput };

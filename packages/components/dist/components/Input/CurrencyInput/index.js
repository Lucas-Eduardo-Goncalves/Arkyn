import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useFormController } from "../../../components/Form/FormController";
import { maskValues } from "../../../services/maskValues";
import { normalizeValue } from "../../../services/normalizeValue";
import { getConfig } from "./getConfig";
function CurrencyInput(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [maskedValue, setMaskedValue] = useState("0");
    const baseRef = useRef(null);
    const { inputRef, id, error } = useFormController();
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, sufix, iconSize, loadingPosition, isLoading, LeftIcon, readOnly, onFocus, onBlur, RightIcon, Spinner, value, max, onChangeValue, onKeyPress, currency, locale, name, defaultValue, ...rest } = getConfig({ ...props, id, isError }, isFocused);
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
    function handleFocus(event) {
        setIsFocused(true);
        if (onFocus)
            onFocus(event);
    }
    function handleBlur(e) {
        setIsFocused(false);
        if (onBlur)
            onBlur(e);
    }
    const updateValues = (originalValue) => {
        const [calculatedValue, calculatedMaskedValue] = maskValues(locale, originalValue, currency);
        if (!max || calculatedValue <= max) {
            setMaskedValue(calculatedMaskedValue);
            return [calculatedValue, calculatedMaskedValue];
        }
        return [normalizeValue(maskedValue), maskedValue];
    };
    const handleChange = (event) => {
        event.preventDefault();
        const [originalValue, maskedValue] = updateValues(event.target.value);
        onChangeValue(event, String(originalValue), String(maskedValue));
    };
    const handleKeyUp = (event) => onKeyPress && onKeyPress(event, event.key, event.key);
    useEffect(() => {
        const currentValue = value || defaultValue || undefined;
        const [, maskedValue] = maskValues(locale, currentValue, currency);
        setMaskedValue(maskedValue);
    }, [currency, defaultValue, value]);
    return (_jsxs("section", { title: title, style: style, onClick: handleSectionClick, className: className, children: [prefix, showLeftSpinner && Spinner, showLeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsx("input", { value: maskedValue, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, onKeyUp: handleKeyUp, disabled: disabled || isLoading, readOnly: readOnly, ref: ref, ...rest }), _jsx("input", { type: "hidden", name: name, value: normalizeValue(maskedValue) }), showRightSpinner && Spinner, showRightIcon && _jsx(RightIcon, { size: iconSize, strokeWidth: 2.5 }), sufix] }));
}
export { CurrencyInput };

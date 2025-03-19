import { jsx as _jsx } from "react/jsx-runtime";
import { InputMask } from "@react-input/mask";
import { forwardRef, useEffect, useState, } from "react";
import { applyMask, clear, getMask, MAX_LENGTH, TYPES, } from "../../services/utils";
import "./style.css";
const BaseInput = forwardRef((props, ref) => {
    return _jsx("input", { ref: ref, ...props });
});
const PhoneInputMask = forwardRef((props, ref) => {
    const { onFocus, onBlur, size, onChange, value, currentCountry, disabled } = props;
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (isMounted)
            onChange(currentCountry.mask);
        else
            setIsMounted(true);
    }, [currentCountry]);
    const className = `phoneInputMask ${size}`;
    function handleChange(event) {
        let value = clear(event.target.value);
        const mask = getMask(value);
        let nextLength = value.length;
        if (nextLength > MAX_LENGTH)
            return;
        value = applyMask(value, TYPES[mask]);
        event.target.value = value;
        onChange(value);
    }
    if (currentCountry.code === "+55") {
        return (_jsx("input", { value: value, onChange: handleChange, className: className, onFocus: onFocus, onBlur: onBlur, disabled: disabled, ref: ref }));
    }
    return (_jsx(InputMask, { value: value, onChange: (e) => onChange(e.target.value), className: className, component: BaseInput, onFocus: onFocus, onBlur: onBlur, disabled: disabled, mask: currentCountry.mask, showMask: true, replacement: { _: /\d/ }, ref: ref }));
});
export { PhoneInputMask };

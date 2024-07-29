import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useFormController } from "../Form/FormController";
import { getConfig } from "./getConfig";
import "./styles.css";
function Select(props) {
    const [isFocused, setIsFocused] = useState(false);
    const { inputRef, id, error } = useFormController();
    const baseRef = useRef(null);
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, iconSize, isLoading, LeftIcon, value: baseValue = null, defaultValue = "", readOnly, onFocus, onBlur, Spinner, name, isSearchable, placeholder, onSelect, options, optionMaxHeight, closeOnSelect, ...rest } = getConfig({ ...props, id, isError }, isFocused);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [searchValue, setSearchValue] = useState("");
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
    function handleBlur() {
        setIsFocused(false);
        if (onBlur && ref.current) {
            ref.current.blur();
        }
    }
    function handleChangeValue(option) {
        const { label, value } = option;
        if (selectedValue !== value)
            setSelectedValue(value);
        else
            setSelectedValue("");
        if (onSelect)
            onSelect({ label, value });
        if (closeOnSelect) {
            ref.current.blur();
            setIsFocused(false);
            console.log("fecha");
        }
    }
    const currentValue = typeof baseValue === "string" ? baseValue : selectedValue;
    const currentLabel = options.find((option) => option.value === currentValue)?.label || "";
    const placeholderDark = () => {
        if (isSearchable) {
            if (!isFocused && !!currentLabel)
                return true;
            if (!isFocused && !currentLabel)
                return false;
            if (isFocused)
                return false;
        }
        if (!isSearchable) {
            if (!isFocused && !!currentLabel)
                return true;
            if (!isFocused && !currentLabel)
                return false;
            if (isFocused && !!currentLabel)
                return true;
            if (isFocused && !currentLabel)
                return false;
        }
    };
    const filteredOptions = options.filter((option) => {
        if (isSearchable) {
            return option.label.toLowerCase().includes(searchValue.toLowerCase());
        }
        else {
            return true;
        }
    });
    return (_jsxs(_Fragment, { children: [_jsxs("section", { title: title, style: style, onClick: handleSectionClick, className: `${className} placeholder_dark_${placeholderDark()}`, children: [prefix, LeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsx("input", { disabled: disabled || isLoading, readOnly: !isSearchable, value: searchValue || "", placeholder: currentLabel || placeholder, onFocus: handleFocus, onBlur: () => setSearchValue(""), ...rest, onChange: (e) => setSearchValue(e.target.value) }), _jsx("input", { type: "hidden", ref: ref, name: name, value: currentValue || "", readOnly: true }), isFocused && (_jsxs("div", { className: "arkyn_select_content", style: { overflow: "auto", maxHeight: optionMaxHeight }, children: [filteredOptions.map(({ label, value }) => (_jsxs("div", { onClick: () => handleChangeValue({ label, value }), className: currentValue === value
                                    ? "arkyn_select_option active"
                                    : "arkyn_select_option", children: [label, " ", _jsx(Check, {})] }, value))), filteredOptions.length <= 0 && _jsx("p", { children: "Sem op\u00E7\u00F5es dispon\u00EDveis" })] })), !isLoading && (_jsx(ChevronDown, { className: "arkyn_select_arrow", size: iconSize, strokeWidth: 2.5 })), isLoading && Spinner] }), isFocused && (_jsx("aside", { className: "arkyn_select_overlay", onClick: handleBlur }))] }));
}
export { Select };

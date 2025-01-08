import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, ChevronDown, Search } from "lucide-react";
import { useRef, useState } from "react";
import { getConfig } from "./getConfig";
import { useFormController } from "../../components/Form/FormController";
import { Input } from "../Input";
import "./styles.css";
function Select(props) {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const { inputRef, id, error } = useFormController();
    const baseRef = useRef(null);
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, iconSize, isLoading, LeftIcon, value: baseValue = null, defaultValue = "", onFocus, onBlur, Spinner, name, placeholder, onSelect, options, optionMaxHeight, closeOnSelect, isSearchable, onSearch, ...rest } = getConfig({ ...props, id, isError }, isFocused);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    function handleSectionClick() {
        if (disabled || !ref?.current || isFocused)
            return;
        setIsFocused(true);
        ref.current.focus();
    }
    function handleSearch(e) {
        if (onSearch) {
            setSearch("");
            onSearch(e.target.value);
        }
        if (!onSearch)
            setSearch(e.target.value);
    }
    function handleFocus(e) {
        if (isFocused)
            return;
        setIsFocused(true);
        if (onFocus)
            onFocus(e);
    }
    function handleBlur() {
        setIsFocused(false);
        if (onBlur && ref.current)
            ref.current.blur();
    }
    function handleChangeValue(option) {
        const { label, value } = option;
        if (selectedValue !== value)
            setSelectedValue(value);
        else
            setSelectedValue("");
        if (onSelect)
            onSelect({ label, value });
        if (closeOnSelect)
            handleBlur();
    }
    const currentValue = typeof baseValue === "string" ? baseValue : selectedValue;
    const currentLabel = options.find((option) => option.value === currentValue)?.label || "";
    const placeholderDark = () => {
        if (!isFocused && !!currentLabel)
            return true;
        if (!isFocused && !currentLabel)
            return false;
        if (isFocused && !!currentLabel)
            return true;
        if (isFocused && !currentLabel)
            return false;
    };
    return (_jsxs(_Fragment, { children: [_jsxs("section", { title: title, style: style, onClick: handleSectionClick, className: `${className} placeholder_dark_${placeholderDark()}`, children: [prefix, LeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsx("input", { disabled: disabled, readOnly: true, placeholder: currentLabel || placeholder, onFocus: handleFocus, ...rest }), _jsx("input", { type: "hidden", ref: ref, name: name, value: currentValue || "", readOnly: true }), isFocused && (_jsxs("div", { className: "arkyn_select_content", style: { overflow: "auto", maxHeight: optionMaxHeight }, children: [isSearchable && (_jsx(Input, { type: "search", name: "search-select", variant: "underline", leftIcon: Search, onChange: handleSearch })), options
                                .filter((option) => {
                                if (props.onSearch)
                                    return true;
                                if (!props.isSearchable)
                                    return true;
                                if (option.label.toLowerCase().includes(search.toLowerCase()))
                                    return true;
                                return false;
                            })
                                .map(({ label, value }) => (_jsxs("div", { onClick: () => handleChangeValue({ label, value }), className: currentValue === value
                                    ? "arkyn_select_option active"
                                    : "arkyn_select_option", children: [label, " ", _jsx(Check, {})] }, value))), options.length <= 0 && _jsx("p", { children: "Sem op\u00E7\u00F5es dispon\u00EDveis" })] })), !isLoading && (_jsx(ChevronDown, { className: "arkyn_select_arrow", size: iconSize, strokeWidth: 2.5 })), isLoading && Spinner] }), isFocused && (_jsx("aside", { className: "arkyn_select_overlay", onClick: handleBlur }))] }));
}
export { Select };

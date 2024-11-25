import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { morpheme } from "../../services";
import { useFormController } from "../Form/FormController";
import { MultiSelectChevron } from "./components/MultiSelectChevron";
import { MultiSelectContainer } from "./components/MultiSelectContainer";
import { MultiSelectContent } from "./components/MultiSelectContent";
import { MultiSelectMark } from "./components/MultiSelectMark";
import { MultiSelectOption } from "./components/MultiSelectOption";
import { MultiSelectOptionsContainer } from "./components/MultiSelectOptionsContainer";
import { MultiSelectOverlay } from "./components/MultiSelectOverlay";
import { MultiSelectSpinner } from "./components/MultiSelectSpinner";
function MultiSelect(props) {
    const { name, options, className = "", placeholder = "Selecione...", closeOnSelect = false, defaultValue = [], isError: baseIsError, isLoading = false, readOnly = false, isSearchable = false, leftIcon: LeftIcon, onSearch, onSelect, onBlur, notFoundText = "Sem opções disponíveis", onFocus, disabled = false, prefix: basePrefix, size = "md", value, variant = "solid", } = props;
    const formController = useFormController();
    const baseRef = useRef(null);
    const multiSelectRef = formController.inputRef || baseRef;
    const multiSelectId = formController.id;
    const isError = baseIsError || !!formController.error;
    const iconSizes = { md: 20, lg: 20 };
    const iconSize = iconSizes[size];
    const prefix = morpheme(basePrefix, iconSize, "prefix");
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(defaultValue);
    const forceSelectedOptions = value || selectedOptions;
    function optionHasSelected(value) {
        return forceSelectedOptions.includes(value);
    }
    function getOptionLabel(value) {
        const option = options.find((option) => option.value === value);
        return option?.label || "";
    }
    function handleContainerFocus() {
        if (disabled || !multiSelectRef?.current || isFocused)
            return;
        setIsFocused(true);
        multiSelectRef.current.focus();
        onFocus && onFocus();
    }
    function handleBlur() {
        setIsFocused(false);
        if (onBlur && multiSelectRef.current)
            multiSelectRef.current.blur();
    }
    function handleSearch(value) {
        setSearch(value);
        if (onSearch)
            onSearch(value);
    }
    function handleChangeValue(value) {
        if (optionHasSelected(value)) {
            setSelectedOptions(selectedOptions.filter((v) => v !== value));
        }
        else
            setSelectedOptions([...selectedOptions, value]);
        if (onSelect)
            onSelect(selectedOptions);
        if (closeOnSelect)
            handleBlur();
    }
    const mappedOptions = options.filter((option) => {
        if (props.onSearch)
            return true;
        if (!props.isSearchable)
            return true;
        if (option.label.toLowerCase().includes(search.toLowerCase()))
            return true;
        return false;
    });
    return (_jsxs(MultiSelectContainer, { handleContainerFocus: handleContainerFocus, disabled: disabled, isError: isError, isFocused: isFocused, isLoading: isLoading, readOnly: readOnly, size: size, variant: variant, className: className, prefixExists: !!basePrefix, id: multiSelectId, children: [_jsx("input", { ref: multiSelectRef, name: name, value: JSON.stringify(forceSelectedOptions), type: "hidden" }), prefix, LeftIcon && _jsx(LeftIcon, { size: iconSize, strokeWidth: 2.5 }), _jsxs(MultiSelectContent, { size: size, children: [forceSelectedOptions.map((value) => (_jsx(MultiSelectMark, { label: getOptionLabel(value), value: value, handleChangeValue: handleChangeValue }, value))), forceSelectedOptions.length <= 0 && _jsx("p", { children: placeholder })] }), _jsxs(MultiSelectOptionsContainer, { isFocused: isFocused, isSearchable: isSearchable, onSearch: handleSearch, children: [mappedOptions.map(({ label, value }) => (_jsx(MultiSelectOption, { label: label, value: value, size: size, handleChangeValue: handleChangeValue, optionHasSelected: optionHasSelected }, value))), mappedOptions.length <= 0 && _jsx("p", { children: notFoundText })] }), _jsx(MultiSelectChevron, { disabled: disabled, isFocused: isFocused, readOnly: readOnly, iconSize: iconSize, isLoading: isLoading }), _jsx(MultiSelectSpinner, { iconSize: iconSize, isLoading: isLoading }), _jsx(MultiSelectOverlay, { handleBlur: handleBlur, isFocused: isFocused })] }));
}
export { MultiSelect };

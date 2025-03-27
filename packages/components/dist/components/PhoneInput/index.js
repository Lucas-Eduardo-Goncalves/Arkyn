import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { countries } from "@arkyn/templates";
import { useRef, useState } from "react";
import { useFormController } from "../Form/FormController";
import { PhoneInputContainer } from "./components/PhoneInputContainer";
import { PhoneInputCountriesOverlay } from "./components/PhoneInputCountriesOverlay";
import { PhoneInputCountryOption } from "./components/PhoneInputCountryOption";
import { PhoneInputCountryOptionsContainer } from "./components/PhoneInputCountryOptionsContainer";
import { PhoneInputCountrySelector } from "./components/PhoneInputCountrySelector";
import { PhoneInputMask } from "./components/PhoneInputMask";
import { getDefaultFormatPhoneNumber } from "./services/getDefaultFormatPhoneNumber";
function PhoneInput(props) {
    const { defaultCountry, className = "", disabled = false, isError: baseIsError = false, isLoading = false, readOnly = false, size = "md", defaultValue = "", variant = "solid", name, searchCountryPlaceholder = "Pesquisar país", notFoundCountryText = "Nenhum país encontrado", ...rest } = props;
    const defaultData = getDefaultFormatPhoneNumber(defaultValue);
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState("");
    const [showCountryOptions, setShowCountryOptions] = useState(false);
    const [value, setValue] = useState(defaultData.formattedNumber || "");
    const [currentCountry, setCurrentCountry] = useState(() => {
        if (defaultData.country)
            return defaultData.country;
        const country = countries.find((country) => country.iso === defaultCountry);
        if (country)
            return country;
        return countries[30];
    });
    const { id, inputRef, error } = useFormController();
    const isError = baseIsError || !!error;
    const inputPhoneMaskRef = useRef(null);
    function handleContainerFocus() {
        if (isFocused || showCountryOptions)
            return;
        setIsFocused(true);
        if (inputPhoneMaskRef.current)
            inputPhoneMaskRef.current.focus();
    }
    function handleOpenCountryOptions() {
        setShowCountryOptions(true);
        setIsFocused(true);
    }
    function handleCloseCountryOptions() {
        setShowCountryOptions(false);
        setIsFocused(false);
    }
    function handleInputFocus() {
        setIsFocused(true);
    }
    function handleInputBlur() {
        setIsFocused(false);
    }
    function filterCountryFunction(country) {
        return country.name.toLowerCase().includes(search.toLowerCase());
    }
    function removeNumberMasks(number) {
        if (currentCountry.prefix) {
            return number
                .replace(currentCountry.prefix, "")
                .replaceAll(" ", "")
                .replaceAll("-", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
                .trim();
        }
        return number
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .replaceAll("(", "")
            .replaceAll(")", "")
            .trim();
    }
    function inputValue() {
        let returnValue = currentCountry.code;
        if (currentCountry.prefix)
            returnValue += `-${currentCountry.prefix}`;
        returnValue += " ";
        returnValue += removeNumberMasks(value);
        return returnValue;
    }
    return (_jsxs(PhoneInputContainer, { id: id, disabled: disabled, isError: isError, isLoading: isLoading, isFocused: isFocused, readOnly: readOnly, size: size, variant: variant, className: className, onFocus: handleContainerFocus, children: [_jsx(PhoneInputCountrySelector, { currentCountry: currentCountry, onClick: handleOpenCountryOptions, size: size }), _jsxs(PhoneInputCountryOptionsContainer, { isOpen: showCountryOptions, search: search, placeholder: searchCountryPlaceholder, onSearch: setSearch, children: [countries
                        .filter((country) => filterCountryFunction(country))
                        .map((country) => (_jsx(PhoneInputCountryOption, { country: country, handleChangeValue: () => {
                            setCurrentCountry(country);
                            setShowCountryOptions(false);
                            setValue(country.mask);
                        }, isActive: country.iso === currentCountry.iso, size: size }, country.iso))), countries.filter((country) => filterCountryFunction(country))
                        .length === 0 && _jsx("p", { children: notFoundCountryText })] }), _jsx(PhoneInputCountriesOverlay, { isOpen: showCountryOptions, onClick: handleCloseCountryOptions }), _jsx(PhoneInputMask, { ref: inputPhoneMaskRef, currentCountry: currentCountry, value: value, onChange: (e) => {
                    setValue(e);
                    rest.onChange && rest.onChange(e);
                }, disabled: disabled, onBlur: handleInputBlur, onFocus: handleInputFocus, size: size }), _jsx("input", { ref: inputRef, type: "hidden", name: name, value: inputValue() })] }));
}
export { PhoneInput };

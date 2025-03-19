import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function PhoneInputCountryOptionsContainer(props) {
    const { children, isOpen, onSearch, search, placeholder } = props;
    function handleSearch(e) {
        onSearch(e.target.value);
    }
    if (!isOpen)
        return _jsx(_Fragment, {});
    return (_jsxs("div", { className: "arkynPhoneInputCountryOptionsContainer", children: [_jsx("input", { type: "search", name: "search-select", className: "arkynPhoneInputCountryOptionsContainerSearchSelect", value: search, id: "input-search", placeholder: placeholder, onChange: handleSearch }), children] }));
}
export { PhoneInputCountryOptionsContainer };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
import "./styles.css";
function PhoneInputCountryOption(props) {
    const { country, isActive, handleChangeValue, size } = props;
    const hasActive = isActive ? "active" : "";
    const className = `arkynPhoneInputCountryOption ${size} ${hasActive}`;
    return (_jsxs("div", { onClick: () => handleChangeValue(country), className: className, children: [_jsx("img", { src: country.flag, alt: country.name, className: "flag" }), country.name, " ", _jsx("span", { children: country.code }), _jsx(Check, { className: "check" })] }));
}
export { PhoneInputCountryOption };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { Divider } from "../../../Divider";
import "./styles.css";
function PhoneInputCountrySelector(props) {
    const { currentCountry, onClick } = props;
    return (_jsxs("div", { className: "phoneInputSelectCountry", onClick: onClick, children: [_jsx("img", { className: "flag", src: currentCountry.flag, alt: currentCountry.name }), _jsx(ChevronDown, { className: "chevronDown", strokeWidth: 2.5 }), _jsx(Divider, { orientation: "vertical" })] }));
}
export { PhoneInputCountrySelector };

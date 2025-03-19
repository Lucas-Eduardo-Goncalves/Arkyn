import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function PhoneInputCountriesOverlay(props) {
    const { isOpen, onClick } = props;
    if (!isOpen)
        return _jsx(_Fragment, {});
    return (_jsx("aside", { className: "arkynPhoneInputCountriesOverlay", onClick: onClick }));
}
export { PhoneInputCountriesOverlay };

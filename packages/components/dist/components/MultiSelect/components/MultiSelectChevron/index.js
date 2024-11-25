import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import "./styles.css";
function MultiSelectChevron(props) {
    const { iconSize, isLoading, disabled, readOnly, isFocused } = props;
    const notAnimate = disabled || readOnly ? "notAnimate" : "";
    const focused = isFocused ? "focused" : "";
    const className = `arkynMultiSelectChevron ${notAnimate} ${focused}`;
    if (isLoading)
        return _jsx(_Fragment, {});
    return (_jsx(ChevronDown, { className: className, size: iconSize, strokeWidth: 2.5 }));
}
export { MultiSelectChevron };

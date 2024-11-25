import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
import "./styles.css";
function MultiSelectOption(props) {
    const { label, optionHasSelected, handleChangeValue, value, size } = props;
    const hasActive = optionHasSelected(value) ? "active" : "";
    const className = `arkynMultiSelectOption ${size} ${hasActive}`;
    return (_jsxs("div", { onClick: () => handleChangeValue(value), className: className, children: [label, " ", _jsx(Check, {})] }));
}
export { MultiSelectOption };

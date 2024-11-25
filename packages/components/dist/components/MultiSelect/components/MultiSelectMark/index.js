import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import "./styles.css";
function MultiSelectMark(props) {
    const { label, value, handleChangeValue } = props;
    return (_jsxs("div", { className: "arkynMultiSelectMark", children: [label, _jsx("button", { type: "button", onClick: (e) => {
                    e.stopPropagation();
                    handleChangeValue(value);
                }, children: _jsx(X, {}) })] }));
}
export { MultiSelectMark };

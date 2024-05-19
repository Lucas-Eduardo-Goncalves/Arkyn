import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
import { useState } from "react";
import "./styles.css";
import { useFormController } from "../Form/FormController";
function Checkbox(props) {
    const { name, className: baseClassName = "", size = "md", isError: defaultIsError, defaultChecked = false, checked: baseChecked = null, onCheck, value, ...rest } = props;
    const { id, inputRef, error } = useFormController();
    const isError = defaultIsError || !!error;
    const [isChecked, setIsChecked] = useState(defaultChecked || false);
    const currentChecked = typeof baseChecked === "boolean" ? baseChecked : isChecked;
    const className = `arkyn_checkbox ${size} ${isError ? "error" : ""} ${currentChecked ? "checked" : ""} ${baseClassName}`;
    function handleCheck() {
        const defaultChecked = isChecked;
        setIsChecked(!defaultChecked);
        onCheck && onCheck(!defaultChecked ? value || "checked" : "");
    }
    return (_jsxs("div", { className: className, onClick: handleCheck, ...rest, children: [_jsx("input", { type: "hidden", name: name, id: id, ref: inputRef, onFocus: handleCheck, onBlur: handleCheck, value: currentChecked ? value || "checked" : "" }), _jsx(Check, {})] }));
}
export { Checkbox };

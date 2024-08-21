import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { useFormController } from "../../Form/FormController";
import "./styles.css";
const RadioContext = createContext({});
function useRadioGroup() {
    return useContext(RadioContext);
}
function RadioGroup(props) {
    const { defaultValue, name, value: forceValue, onChange, size = "md", className: baseClassName, ...rest } = props;
    const [value, setValue] = useState(defaultValue || "");
    const { inputRef, id } = useFormController();
    function handleChange(value) {
        setValue(value);
        onChange && onChange(value);
    }
    const className = `arkyn_radio_group ${size} ${baseClassName || ""}`;
    return (_jsxs(RadioContext.Provider, { value: { onChange: handleChange, value: forceValue || value, size }, children: [_jsx("input", { style: { display: "none" }, type: "text", id: id, readOnly: true, name: name, ref: inputRef, value: value }), _jsx("div", { className: className.trim(), ...rest })] }));
}
export { RadioGroup, useRadioGroup };

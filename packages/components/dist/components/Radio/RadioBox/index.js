import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormController } from "../../Form/FormController";
import { useRadioGroup } from "../RadioGroup";
import "./styles.css";
function RadioBox(props) {
    const { value: componentValue, size: componentSize, disabled, children, } = props;
    const { onChange, size: groupSize, value: selectedValue } = useRadioGroup();
    const { error } = useFormController();
    const size = componentSize || groupSize;
    const isChecked = selectedValue === componentValue ? "isChecked" : "";
    const isErrored = !!error ? "isErrored" : "";
    const isDisabled = disabled ? "isDisabled" : "";
    const className = `arkyn_radio_box ${size} ${isChecked} ${isErrored} ${isDisabled}`;
    return (_jsxs("label", { className: className.trim(), children: [_jsx("button", { type: "button", disabled: disabled, onClick: () => onChange(componentValue), onFocus: () => onChange(componentValue) }), children] }));
}
export { RadioBox };

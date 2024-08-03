import { jsx as _jsx } from "react/jsx-runtime";
import { useFormController } from "../FormController";
import "./styles.css";
function FormLabel(props) {
    const { showAsterisk = false, className: baseClassName = "", ...rest } = props;
    const { id } = useFormController();
    const show = showAsterisk ? "show-asterisk" : "";
    const className = `arkyn_form_label ${show} ${baseClassName}`;
    return _jsx("label", { ...rest, className: className.trim(), htmlFor: id });
}
export { FormLabel };

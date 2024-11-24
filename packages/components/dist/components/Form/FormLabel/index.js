import { jsx as _jsx } from "react/jsx-runtime";
import { useFormController } from "../FormController";
import "./styles.css";
function FormLabel(props) {
    const { showAsterisk = false, className: baseClassName = "", ...rest } = props;
    const { id } = useFormController();
    const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
    const className = `arkynFormLabel ${show} ${baseClassName}`;
    return _jsx("label", { className: className.trim(), htmlFor: id, ...rest });
}
export { FormLabel };

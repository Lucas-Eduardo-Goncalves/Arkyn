import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormController } from "../FormController";
import "./styles.css";
function FormError(props) {
    const { children, className: baseClassName, ...rest } = props;
    const className = `arkyn_form_error ${baseClassName}`;
    const { error } = useFormController();
    if (children) {
        return (_jsx("strong", { className: className.trim(), ...rest, children: children }));
    }
    if (!error)
        return _jsx(_Fragment, {});
    return (_jsx("strong", { className: className.trim(), ...rest, children: error }));
}
export { FormError };

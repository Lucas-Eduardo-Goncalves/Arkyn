import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormController } from "../FormController";
import "./styles.css";
function FormError({ children }) {
    const { error } = useFormController();
    if (children)
        return _jsx("strong", { className: "arkyn_form_error", children: children });
    if (!error)
        return _jsx(_Fragment, {});
    return _jsx("strong", { className: "arkyn_form_error", children: error });
}
export { FormError };

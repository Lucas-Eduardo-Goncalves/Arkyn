import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useFormController } from "../FormController";
import "./styles.css";
function FormError() {
    const { error } = useFormController();
    if (!error)
        return _jsx(_Fragment, {});
    return _jsx("strong", { className: "arkyn_form_error", children: error });
}
export { FormError };

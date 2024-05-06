import { useFormController } from "../FormController";
import "./styles.css";
function FormError() {
    const { error } = useFormController();
    if (!error)
        return React.createElement(React.Fragment, null);
    return React.createElement("strong", { className: "arkyn_form_error" }, error);
}
export { FormError };

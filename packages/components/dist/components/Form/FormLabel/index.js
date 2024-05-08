import { jsx as _jsx } from "react/jsx-runtime";
import { buildFormLabelConfig } from "../../../config/buildFormLabelConfig";
import { useFormController } from "../FormController";
import "./styles.css";
function FormLabel(props) {
    const { id } = useFormController();
    return _jsx("label", { ...buildFormLabelConfig(props), htmlFor: id });
}
export { FormLabel };

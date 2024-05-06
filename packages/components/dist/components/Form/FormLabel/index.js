import { buildFormLabelConfig } from "../../../config/buildFormLabelConfig";
import { useFormController } from "../FormController";
import "./styles.css";
function FormLabel(props) {
    const { id } = useFormController();
    return React.createElement("label", { ...buildFormLabelConfig(props), htmlFor: id });
}
export { FormLabel };

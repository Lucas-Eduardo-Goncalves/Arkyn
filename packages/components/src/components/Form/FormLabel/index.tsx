import { FormLabelProps } from "@arkyn/types";

import { useFormController } from "../FormController";
import "./styles.css";

function FormLabel(props: FormLabelProps) {
  const {
    showAsterisk = false,
    className: baseClassName = "",
    ...rest
  } = props;

  const { id } = useFormController();

  const show = showAsterisk ? "show-asterisk" : "";
  const className = `arkyn_form_label ${show} ${baseClassName}`;

  return <label {...rest} className={className.trim()} htmlFor={id} />;
}

export { FormLabel };

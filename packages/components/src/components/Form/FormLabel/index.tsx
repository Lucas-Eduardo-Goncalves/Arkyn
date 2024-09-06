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

  const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
  const className = `arkynFormLabel ${show} ${baseClassName}`;

  return <label className={className.trim()} htmlFor={id} {...rest} />;
}

export { FormLabel };

import type { FormLabelProps } from "@arkyn/types";

import { buildFormLabelConfig } from "../../../config/buildFormLabelConfig";
import { useFormController } from "../FormController";

import "./styles.css";

function FormLabel(props: FormLabelProps) {
  const { id } = useFormController();
  return <label {...buildFormLabelConfig(props)} htmlFor={id} />;
}

export { FormLabel };

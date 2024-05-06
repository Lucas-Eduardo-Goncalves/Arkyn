import { useFormController } from "../FormController";
import * as React from "react";

import "./styles.css";

function FormError() {
  const { error } = useFormController();
  if (!error) return <></>;
  return <strong className="arkyn_form_error">{error}</strong>;
}

export { FormError };

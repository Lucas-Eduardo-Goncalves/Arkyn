import { ReactNode } from "react";
import { useFormController } from "../FormController";

import "./styles.css";

type FormErrorProps = {
  children?: ReactNode;
};

function FormError({ children }: FormErrorProps) {
  const { error } = useFormController();
  if (!error) return <></>;
  return <strong className="arkyn_form_error">{children || error}</strong>;
}

export { FormError };

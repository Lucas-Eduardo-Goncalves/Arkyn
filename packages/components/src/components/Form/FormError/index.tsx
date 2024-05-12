import { ReactNode } from "react";
import { useFormController } from "../FormController";

import "./styles.css";

type FormErrorProps = {
  children?: ReactNode;
};

function FormError({ children }: FormErrorProps) {
  const { error } = useFormController();
  if (children) return <strong className="arkyn_form_error">{children}</strong>;
  if (!error) return <></>;
  return <strong className="arkyn_form_error">{error}</strong>;
}

export { FormError };

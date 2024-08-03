import { FormErrorProps } from "@arkyn/types";

import { useFormController } from "../FormController";
import "./styles.css";

function FormError(args: FormErrorProps) {
  const { children, className: baseClassName, ...rest } = args;
  const className = `arkyn_form_error ${baseClassName}`;

  const { error } = useFormController();
  if (children) {
    return (
      <strong className={className.trim()} {...rest}>
        {children}
      </strong>
    );
  }

  if (!error) return <></>;
  return (
    <strong className={className.trim()} {...rest}>
      {error}
    </strong>
  );
}

export { FormError };

import { FormErrorProps } from "@arkyn/types";

import { useFormController } from "../FormController";
import "./styles.css";

function FormError(props: FormErrorProps) {
  const { children, className: baseClassName, ...rest } = props;
  const className = `arkynFormError ${baseClassName}`;

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

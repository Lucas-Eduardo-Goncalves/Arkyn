import { AlertDescriptionProps } from "@arkyn/types";
import "./styles.css";

function AlertDescription(props: AlertDescriptionProps) {
  const { children, className: baseClassName, ...rest } = props;
  const className = `arkyn_description ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {children}
    </div>
  );
}

export { AlertDescription };

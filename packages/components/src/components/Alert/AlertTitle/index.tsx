import { AlertTitleProps } from "@arkyn/types";
import "./styles.css";

function AlertTitle(props: AlertTitleProps) {
  const { children, className: baseClassName, ...rest } = props;
  const className = `arkyn_title ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {children}
    </div>
  );
}

export { AlertTitle };

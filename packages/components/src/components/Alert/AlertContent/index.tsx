import { AlertContentProps } from "@arkyn/types";

import "./styles.css";

function AlertContent(props: AlertContentProps) {
  const { children, className: baseClassName, ...rest } = props;
  const className = `arkyn_alert_content ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {children}
    </div>
  );
}

export { AlertContent };

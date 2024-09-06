import { BreadcrumbContainerProps } from "@arkyn/types";
import "./styles.css";

function BreadcrumbContainer(args: BreadcrumbContainerProps) {
  const { className: baseClassName = "", ...rest } = args;
  const className = `arkynBreadcrumbContainer ${baseClassName}`;

  return <nav className={className} {...rest} />;
}

export { BreadcrumbContainer };

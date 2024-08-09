import { BreadcrumbContainerProps } from "@arkyn/types";
import "./styles.css";

function BreadcrumbContainer(args: BreadcrumbContainerProps) {
  const { className: baseClassName = "", ...rest } = args;
  const className = `arkyn_breadcrumb_container ${baseClassName}`;

  return <nav className={className} {...rest} />;
}

export { BreadcrumbContainer };

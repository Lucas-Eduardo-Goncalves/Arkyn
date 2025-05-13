import { BreadcrumbLinkProps } from "@arkyn/types";
import { useLocation, Link } from "react-router";
import { ChevronRight } from "lucide-react";

import "./styles.css";

function BreadcrumbLink(args: BreadcrumbLinkProps) {
  const { pathname } = useLocation();

  const {
    className: baseClassName = "",
    disabled = false,
    children,
    to,
    ...rest
  } = args;

  const active = pathname === to ? "active" : "inactive";
  const className = `arkynBreadcrumbLink ${active} ${baseClassName}`;

  if (disabled) {
    return (
      <p className={className}>
        <ChevronRight size={14} strokeWidth={2.5} />
        {children}
      </p>
    );
  }

  return (
    <Link to={to} className={className} {...rest}>
      <ChevronRight size={14} strokeWidth={2.5} />
      {children}
    </Link>
  );
}

export { BreadcrumbLink };

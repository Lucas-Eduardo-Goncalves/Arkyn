import { BreadcrumbLinkProps, BreadcrumbProps } from "@arkyn/types";
import { Link, useLocation } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

import "./styles.css";

function Breadcrumb(args: BreadcrumbProps) {
  const { className: baseClassName, ...rest } = args;
  const className = `arkyn_breadcrumb ${baseClassName}`;

  return <nav className={className.trim()} {...rest} />;
}

function BreadcrumbLink(args: BreadcrumbLinkProps) {
  const {
    children,
    to,
    className: baseClassName,
    disabled = false,
    ...rest
  } = args;

  const { pathname } = useLocation();

  const active = pathname === to ? "active" : "";
  const className = `arkyn_breadcrumb_link ${active} ${baseClassName}`;

  if (disabled || active) {
    return (
      <p className={className.trim()}>
        <ChevronRight size={14} strokeWidth={2.5} />
        {children}
      </p>
    );
  }

  return (
    <Link to={to} className={className.trim()} {...rest}>
      <ChevronRight size={14} strokeWidth={2.5} />
      {children}
    </Link>
  );
}

export { Breadcrumb, BreadcrumbLink };

import type { BreadcrumbLinkProps, BreadcrumbProps } from "@arkyn/types";
import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

import { buildBreadcrumbConfig } from "../../config/buildBreadcrumbConfig";
import { buildBreadcrumbLinkConfig } from "../../config/buildBreadcrumLinkConfig";
import "./styles.css";

function Breadcrumb(args: BreadcrumbProps) {
  const { className, ...rest } = buildBreadcrumbConfig(args);
  return <nav className={className} {...rest} />;
}

function BreadcrumbLink(args: BreadcrumbLinkProps) {
  const { children, className, disabled, ...rest } =
    buildBreadcrumbLinkConfig(args);

  if (disabled) {
    return (
      <p className={className}>
        <ChevronRight size={14} strokeWidth={2.5} />
        {children}
      </p>
    );
  }

  return (
    <Link className={className} {...rest}>
      <ChevronRight size={14} strokeWidth={2.5} />
      {children}
    </Link>
  );
}

export { Breadcrumb, BreadcrumbLink };

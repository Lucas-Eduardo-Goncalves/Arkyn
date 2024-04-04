import type { LinkProps } from "@remix-run/react";
import type { HTMLAttributes } from "react";

type BreadcrumbLinkProps = LinkProps & {
  disabled?: boolean;
};

type BreadcrumbProps = HTMLAttributes<HTMLElement>;

export type { BreadcrumbProps, BreadcrumbLinkProps };

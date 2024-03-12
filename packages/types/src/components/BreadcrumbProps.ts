import { LinkProps } from "@remix-run/react";
import { HTMLAttributes } from "react";

type BreadcrumbLinkProps = LinkProps & {
  disabled?: boolean;
};

type BreadcrumbProps = HTMLAttributes<HTMLElement>;

export type { BreadcrumbProps, BreadcrumbLinkProps };

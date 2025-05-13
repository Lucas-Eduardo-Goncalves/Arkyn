import type { LinkProps } from "react-router";
import type { HTMLAttributes } from "react";

type BreadcrumbLinkProps = LinkProps & {
  disabled?: boolean;
};

type BreadcrumbContainerProps = HTMLAttributes<HTMLElement>;

export type { BreadcrumbContainerProps, BreadcrumbLinkProps };

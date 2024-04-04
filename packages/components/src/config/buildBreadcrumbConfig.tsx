import type { BreadcrumbProps } from "@arkyn/types";

type BuildBreadcrumbConfigProps = BreadcrumbProps;

function buildBreadcrumbConfig(args: BuildBreadcrumbConfigProps) {
  const { className: baseClassName = "", ...rest } = args;
  const className = `arkyn_breadcrumb ${baseClassName}`.trim();

  return { className, ...rest };
}

export { buildBreadcrumbConfig };

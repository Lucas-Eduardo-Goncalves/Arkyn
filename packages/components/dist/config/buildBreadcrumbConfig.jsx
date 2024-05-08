function buildBreadcrumbConfig(args) {
    const { className: baseClassName = "", ...rest } = args;
    const className = `arkyn_breadcrumb ${baseClassName}`.trim();
    return { className, ...rest };
}
export { buildBreadcrumbConfig };

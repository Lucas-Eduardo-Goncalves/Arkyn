import { useLocation } from "@remix-run/react";
function buildBreadcrumbLinkConfig(args) {
    const { pathname } = useLocation();
    const { className: baseClassName = "", disabled: baseDisabled = false, to, ...rest } = args;
    const active = pathname === to ? "active" : "inactive";
    const className = `arkyn_breadcrumb_link ${active} ${baseClassName}`;
    return {
        to,
        className: className.trim(),
        disabled: baseDisabled || active === "active",
        ...rest,
    };
}
export { buildBreadcrumbLinkConfig };

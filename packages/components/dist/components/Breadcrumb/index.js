import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbConfig } from "../../config/buildBreadcrumbConfig";
import { buildBreadcrumbLinkConfig } from "../../config/buildBreadcrumLinkConfig";
import "./styles.css";
function Breadcrumb(args) {
    const { className, ...rest } = buildBreadcrumbConfig(args);
    return _jsx("nav", { className: className, ...rest });
}
function BreadcrumbLink(args) {
    const { children, className, disabled, ...rest } = buildBreadcrumbLinkConfig(args);
    if (disabled) {
        return (_jsxs("p", { className: className, children: [_jsx(ChevronRight, { size: 14, strokeWidth: 2.5 }), children] }));
    }
    return (_jsxs(Link, { className: className, ...rest, children: [_jsx(ChevronRight, { size: 14, strokeWidth: 2.5 }), children] }));
}
export { Breadcrumb, BreadcrumbLink };

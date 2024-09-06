import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import "./styles.css";
function BreadcrumbLink(args) {
    const { pathname } = useLocation();
    const { className: baseClassName = "", disabled = false, children, to, ...rest } = args;
    const active = pathname === to ? "active" : "inactive";
    const className = `arkynBreadcrumbLink ${active} ${baseClassName}`;
    if (disabled) {
        return (_jsxs("p", { className: className, children: [_jsx(ChevronRight, { size: 14, strokeWidth: 2.5 }), children] }));
    }
    return (_jsxs(Link, { to: to, className: className, ...rest, children: [_jsx(ChevronRight, { size: 14, strokeWidth: 2.5 }), children] }));
}
export { BreadcrumbLink };

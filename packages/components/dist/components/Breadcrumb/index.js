import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import { buildBreadcrumbConfig } from "../../config/buildBreadcrumbConfig";
import { buildBreadcrumbLinkConfig } from "../../config/buildBreadcrumLinkConfig";
import "./styles.css";
function Breadcrumb(args) {
    const { className, ...rest } = buildBreadcrumbConfig(args);
    return React.createElement("nav", { className: className, ...rest });
}
function BreadcrumbLink(args) {
    const { children, className, disabled, ...rest } = buildBreadcrumbLinkConfig(args);
    if (disabled) {
        return (React.createElement("p", { className: className },
            React.createElement(ChevronRight, { size: 14, strokeWidth: 2.5 }),
            children));
    }
    return (React.createElement(Link, { className: className, ...rest },
        React.createElement(ChevronRight, { size: 14, strokeWidth: 2.5 }),
        children));
}
export { Breadcrumb, BreadcrumbLink };

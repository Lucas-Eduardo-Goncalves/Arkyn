import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function BreadcrumbContainer(args) {
    const { className: baseClassName = "", ...rest } = args;
    const className = `arkyn_breadcrumb_container ${baseClassName}`;
    return _jsx("nav", { className: className, ...rest });
}
export { BreadcrumbContainer };

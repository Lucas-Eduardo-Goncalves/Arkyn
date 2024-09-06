import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import "./styles.css";
function IconButton(props) {
    const { isLoading = false, scheme = "primary", variant = "solid", size = "md", icon: Icon, disabled, className: baseClassName = "", ...rest } = props;
    const iconSize = { xs: 12, sm: 16, md: 20, lg: 24 };
    const loading = isLoading ? "loadingTrue" : "loadingFalse";
    const className = `arkynIconButton ${variant} ${scheme} ${size} ${loading} ${baseClassName}`;
    return (_jsxs("button", { disabled: disabled || isLoading, className: className.trim(), ...rest, children: [_jsx("div", { className: "arkynIconButtonSpinner", children: _jsx(Loader2, { size: iconSize[size], strokeWidth: 2.5 }) }), _jsx("div", { className: "arkynIconButtonContent", children: _jsx(Icon, { size: iconSize[size], strokeWidth: 2.5 }) })] }));
}
export { IconButton };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import "./styles.css";
function IconButton(args) {
    const { isLoading = false, scheme = "primary", variant = "solid", size = "md", icon: Icon, disabled, className: baseClassName = "", ...rest } = args;
    const iconSize = { xs: 12, sm: 16, md: 20, lg: 24 };
    const className = `arkyn_icon_button ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;
    return (_jsxs("button", { disabled: disabled || isLoading, className: className.trim(), ...rest, children: [_jsx("div", { className: "arkyn_icon_button-spinner", children: _jsx(Loader2, { size: iconSize[size], strokeWidth: 2.5 }) }), _jsx("div", { className: "arkyn_icon_button-content", children: _jsx(Icon, { size: iconSize[size], strokeWidth: 2.5 }) })] }));
}
export { IconButton };

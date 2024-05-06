import { Loader2 } from "lucide-react";
import * as React from "react";
import "./styles.css";
const iconSize = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
};
function IconButton(args) {
    const { isLoading = false, scheme = "primary", variant = "solid", size = "md", icon: Icon, disabled, className: baseClassName = "", ...rest } = args;
    const className = `arkyn_icon_button ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;
    return (React.createElement("button", { disabled: disabled || isLoading, className: className.trim(), ...rest },
        React.createElement("div", { className: "spinner" },
            React.createElement(Loader2, { size: iconSize[size], strokeWidth: 2.5 })),
        React.createElement("div", { className: "content " + size },
            React.createElement(Icon, { size: iconSize[size], strokeWidth: 2.5 }))));
}
export { IconButton };

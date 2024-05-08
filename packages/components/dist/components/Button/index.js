import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import { buildButtonConfig } from "../../config/buildButtonConfig";
import "./styles.css";
function Button(args) {
    const { leftIcon, rightIcon, iconSize, children, loadingText, ...rest } = buildButtonConfig(args);
    return (_jsxs("button", { ...rest, children: [_jsxs("div", { className: "spinner", children: [_jsx(Loader2, { size: iconSize, strokeWidth: 2.5 }), loadingText && loadingText] }), _jsxs("div", { className: "content", children: [leftIcon, children, rightIcon] })] }));
}
export { Button };

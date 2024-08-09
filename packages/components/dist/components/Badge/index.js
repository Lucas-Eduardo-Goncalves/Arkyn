import { jsxs as _jsxs } from "react/jsx-runtime";
import { GenerateIcon } from "../../services";
import "./styles.css";
function Badge(args) {
    const { variant = "ghost", scheme = "primary", size = "md", leftIcon, rightIcon, className: baseClassName = "", children, ...rest } = args;
    const iconSizes = { md: 12, lg: 14 };
    const iconSize = iconSizes[size];
    const className = `arkyn_badge ${variant} ${scheme} ${size} ${baseClassName}`;
    return (_jsxs("div", { className: className.trim(), ...rest, children: [GenerateIcon(iconSize, leftIcon), children, GenerateIcon(iconSize, leftIcon)] }));
}
export { Badge };

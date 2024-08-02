import { jsxs as _jsxs } from "react/jsx-runtime";
import { buildBadgeConfig } from "../../config/buildBadgeConfig";
import "./styles.css";
function Badge(args) {
    const { leftIcon, children, rightIcon, ...rest } = buildBadgeConfig(args);
    return (_jsxs("div", { ...rest, children: [leftIcon, children, rightIcon] }));
}
export { Badge };

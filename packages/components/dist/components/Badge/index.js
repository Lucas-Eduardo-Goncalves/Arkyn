import * as React from "react";
import { buildBadgeConfig } from "../../config/buildBadgeConfig";
import "./styles.css";
function Badge(args) {
    const { leftIcon, children, rightIcon, ...rest } = buildBadgeConfig(args);
    return (React.createElement("div", { ...rest },
        leftIcon,
        children,
        rightIcon));
}
export { Badge };

import { BadgeProps } from "@arkyn/types";

import { buildBadgeConfig } from "../../config/buildBadgeConfig";
import "./styles.css";

function Badge(args: BadgeProps) {
  const { leftIcon, children, rightIcon, ...rest } = buildBadgeConfig(args);

  return (
    <div {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
}

export { Badge };

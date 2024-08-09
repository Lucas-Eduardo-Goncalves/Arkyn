import { BadgeProps } from "@arkyn/types";

import { GenerateIcon } from "../../services";
import "./styles.css";

function Badge(args: BadgeProps) {
  const {
    variant = "ghost",
    scheme = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const iconSizes = { md: 12, lg: 14 };
  const iconSize = iconSizes[size];

  const className = `arkyn_badge ${variant} ${scheme} ${size} ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {GenerateIcon(iconSize, leftIcon)}
      {children}
      {GenerateIcon(iconSize, leftIcon)}
    </div>
  );
}

export { Badge };

import type { BadgeProps } from "@arkyn/types";
import { GenerateIcon } from "../utils/generateIcon";

type BuildBadgeConfigProps = BadgeProps;

function buildBadgeConfig(args: BuildBadgeConfigProps) {
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

  return {
    className: className.trim(),
    children,
    leftIcon: GenerateIcon(iconSize, leftIcon),
    rightIcon: GenerateIcon(iconSize, rightIcon),
    ...rest,
  };
}

export { buildBadgeConfig };

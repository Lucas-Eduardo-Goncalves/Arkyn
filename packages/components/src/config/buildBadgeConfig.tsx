import { BadgeProps } from "@arkyn/types";
import { GenerateIcon } from "../utils/generateIcon";

type BuildBadgeConfigProps = {
  args: BadgeProps;
};

function buildBadgeConfig({ args }: BuildBadgeConfigProps) {
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
    className,
    leftIcon: GenerateIcon(iconSize, leftIcon),
    rightIcon: GenerateIcon(iconSize, rightIcon),
    children,
    ...rest,
  };
}

export { buildBadgeConfig };

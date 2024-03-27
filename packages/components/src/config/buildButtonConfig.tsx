import { ButtonProps } from "@arkyn/types";
import { GenerateIcon } from "../utils/generateIcon";

type BuildButtonConfigProps = ButtonProps;

function buildButtonConfig(args: BuildButtonConfigProps) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    leftIcon,
    rightIcon,
    disabled,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const iconSizes = { xs: 12, sm: 16, md: 20, lg: 24 };
  const iconSize = iconSizes[size];

  const className = `arkyn_button ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;

  return {
    className: className.trim(),
    children,
    iconSize,
    size,
    disabled: disabled || isLoading,
    leftIcon: GenerateIcon(iconSize, leftIcon),
    rightIcon: GenerateIcon(iconSize, rightIcon),
    ...rest,
  };
}

export { buildButtonConfig };

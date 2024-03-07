import { BadgeDTO } from "@arkyn/types";
import "./styles.css";

const iconSize = {
  md: 12,
  lg: 14,
};

function Badge(args: BadgeDTO) {
  const {
    variant = "ghost",
    scheme = "primary",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const className = `arkyn_badge ${variant} ${scheme} ${size} ${baseClassName}`;

  <aside></aside>;

  return (
    <div className={className.trim()} {...rest}>
      {LeftIcon && <LeftIcon size={iconSize[size]} strokeWidth={2.5} />}
      {children}
      {RightIcon && <RightIcon size={iconSize[size]} strokeWidth={2.5} />}
    </div>
  );
}

export { Badge };

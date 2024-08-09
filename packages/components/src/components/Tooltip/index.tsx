import { TooltipProps } from "@arkyn/types";
import "./styles.css";

function Tooltip(props: TooltipProps) {
  const {
    text,
    size = "lg",
    children,
    orientation = "top",
    className: baseClassName,
    ...rest
  } = props;

  const className = `arkyn_tooltip ${size} ${orientation} ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {children}
      <div className="arkyn_tooltip-text">{text}</div>
    </div>
  );
}

export { Tooltip };

import { TooltipProps } from "@arkyn/types";
import "./styles.css";

function Tooltip(props: TooltipProps) {
  const {
    text,
    size = "lg",
    children,
    orientation = "top",
    className: baseClassName = "",
    ...rest
  } = props;

  const className = `arkynTooltip ${size} ${orientation} ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      {children}
      <div className="arkynTooltipText">{text}</div>
    </div>
  );
}

export { Tooltip };

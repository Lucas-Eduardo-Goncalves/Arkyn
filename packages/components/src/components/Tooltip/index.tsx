import { TooltipDTO } from "@arkyn/types";
import "./styles.css";

function Tooltip(args: TooltipDTO) {
  const {
    text,
    size = "lg",
    children,
    orientation = "top",
    className,
    ...rest
  } = args;

  return (
    <div
      className={`arkyn_tooltip ${size} ${orientation} ${className}`}
      {...rest}
    >
      {children}
      <div className="arkyn_tooltip_text">{text}</div>
    </div>
  );
}

export { Tooltip };

import type { TooltipProps } from "@arkyn/types";

import "./styles.css";

function Tooltip(args: TooltipProps) {
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

import { DividerProps } from "@arkyn/types";
import "./styles.css";

function Divider(props: DividerProps) {
  const {
    className: baseClassName,
    orientation = "horizontal",
    ...rest
  } = props;

  const className = `arkynDivider ${orientation} ${baseClassName}`;

  return <div className={className.trim()} {...rest} />;
}

export { Divider };

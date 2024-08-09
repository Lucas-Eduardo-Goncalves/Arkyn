import { DividerProps } from "@arkyn/types";
import "./styles.css";

function Divider(props: DividerProps) {
  const {
    className: baseClassName,
    orientation = "horizontal",
    ...rest
  } = props;

  const className = `arkyn_divider ${orientation} ${baseClassName}`;

  return <div className={className} {...rest} />;
}

export { Divider };

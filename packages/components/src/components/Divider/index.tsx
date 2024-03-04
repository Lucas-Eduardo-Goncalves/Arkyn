import { DividerDTO } from "@arkyn/types";
import "./styles.css";

function Divider(args: DividerDTO) {
  const {
    className: baseClassName,
    orientation = "horizontal",
    ...rest
  } = args;

  const className = `arkyn_divider ${orientation} ${baseClassName}`;

  return <div className={className} {...rest} />;
}

export { Divider };

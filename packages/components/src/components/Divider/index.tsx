import type { DividerProps } from "@arkyn/types";
import * as React from "react";

import "./styles.css";

function Divider(args: DividerProps) {
  const {
    className: baseClassName,
    orientation = "horizontal",
    ...rest
  } = args;

  const className = `arkyn_divider ${orientation} ${baseClassName}`;

  return <div className={className} {...rest} />;
}

export { Divider };

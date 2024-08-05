import { TableBodyProps } from "@arkyn/types";
import "./styles.css";

function TableBody(args: TableBodyProps) {
  const { className: baseClassName, ...rest } = args;
  const className = `arkyn_table_body ${baseClassName}`;

  return <tbody className={className.trim()} {...rest} />;
}

export { TableBody };

import { TableBodyProps } from "@arkyn/types";
import "./styles.css";

function TableBody(props: TableBodyProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkynTableBody ${baseClassName}`;

  return <tbody className={className.trim()} {...rest} />;
}

export { TableBody };

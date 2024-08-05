import { TableContainerProps } from "@arkyn/types";
import "./styles.css";

function TableContainer(args: TableContainerProps) {
  const { children, className: baseClassName, ...rest } = args;
  const className = `arkyn_table_container ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      <table>{children}</table>
    </div>
  );
}

export { TableContainer };

import { TableContainerProps } from "@arkyn/types";
import "./styles.css";

function TableContainer(props: TableContainerProps) {
  const { children, className: baseClassName, ...rest } = props;
  const className = `arkyn_table_container ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      <table>{children}</table>
    </div>
  );
}

export { TableContainer };

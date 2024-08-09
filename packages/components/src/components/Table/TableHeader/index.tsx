import { TableHeaderProps } from "@arkyn/types";
import "./styles.css";

function TableHeader(props: TableHeaderProps) {
  const { className: baseClassName, children, ...rest } = props;
  const className = `arkyn_table_header ${baseClassName}`;

  return (
    <thead className={className.trim()} {...rest}>
      <tr>{children}</tr>
      <tr className="spacing-row" />
    </thead>
  );
}

export { TableHeader };

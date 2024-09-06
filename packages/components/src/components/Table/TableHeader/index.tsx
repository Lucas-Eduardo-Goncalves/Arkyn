import { TableHeaderProps } from "@arkyn/types";
import "./styles.css";

function TableHeader(props: TableHeaderProps) {
  const { className: baseClassName, children, ...rest } = props;
  const className = `arkynTableHeader ${baseClassName}`;

  return (
    <thead className={className.trim()} {...rest}>
      <tr>{children}</tr>
      <tr className="spacingRow" />
    </thead>
  );
}

export { TableHeader };

import { TableFooterProps } from "@arkyn/types";
import "./styles.css";

function TableFooter(props: TableFooterProps) {
  const { className: baseClassName, children, ...rest } = props;
  const className = `arkynTableFooter ${baseClassName}`;

  return (
    <tfoot className={className.trim()} {...rest}>
      <tr className="spacingRow" />
      <tr>
        <th colSpan={100}>
          <div className="arkynTableFooterContent">{children}</div>
        </th>
      </tr>
    </tfoot>
  );
}

export { TableFooter };

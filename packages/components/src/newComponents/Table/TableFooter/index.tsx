import { TableFooterProps } from "@arkyn/types";
import "./styles.css";

function TableFooter(args: TableFooterProps) {
  const { className: baseClassName, children, ...rest } = args;
  const className = `arkyn_table_footer ${baseClassName}`;

  return (
    <tfoot className={className.trim()} {...rest}>
      <tr className="spacing-row" />
      <tr>
        <th colSpan={100}>
          <div className="arkyn_table_footer-content">{children}</div>
        </th>
      </tr>
    </tfoot>
  );
}

export { TableFooter };

import { TableBodyProps } from "@arkyn/types";
import { Children } from "react";
import "./styles.css";

function TableBody(props: TableBodyProps) {
  const {
    emptyMessage = "Nenhum dado adicionado.",
    className: baseClassName,
    children,
    ...rest
  } = props;
  const className = `arkynTableBody ${baseClassName}`;

  const isEmpty = Children.count(children) === 0;

  return (
    <tbody className={className.trim()} {...rest}>
      {isEmpty ? (
        <tr className="arkynTableBodyEmptyLine">
          <td colSpan={100}>
            <div>{emptyMessage}</div>
          </td>
        </tr>
      ) : (
        children
      )}
    </tbody>
  );
}

export { TableBody };

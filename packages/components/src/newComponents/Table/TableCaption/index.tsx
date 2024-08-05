import { TableCaptionProps } from "@arkyn/types";
import "./styles.css";

function TableCaption(args: TableCaptionProps) {
  const { className: baseClassName, children, ...rest } = args;
  const className = `arkyn_table_caption ${baseClassName}`;

  return (
    <caption className={className.trim()} {...rest}>
      <div className="arkyn_table_caption-content">{children}</div>
    </caption>
  );
}

export { TableCaption };

import { TableCaptionProps } from "@arkyn/types";
import "./styles.css";

function TableCaption(props: TableCaptionProps) {
  const { className: baseClassName, children, ...rest } = props;
  const className = `arkynTableCaption ${baseClassName}`;

  return (
    <caption className={className.trim()} {...rest}>
      <div className="arkynTableCaptionContent">{children}</div>
    </caption>
  );
}

export { TableCaption };

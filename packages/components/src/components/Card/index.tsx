import { CardProps } from "@arkyn/types";
import "./styles.css";

function Card(props: CardProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkyn_card_container ${baseClassName}`;

  return <div className={className.trim()} {...rest} />;
}

export { Card };

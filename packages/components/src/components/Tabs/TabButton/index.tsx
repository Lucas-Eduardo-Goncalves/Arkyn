import { TabButtonProps } from "@arkyn/types";
import { MouseEvent } from "react";

import { useTabContext } from "../TabContainer";
import "./styles.css";

function TabButton(props: TabButtonProps) {
  const { children, className: baseClassName = "", onClick, ...rest } = props;

  const { value, showInitialTab, handleTabClick } = useTabContext();

  const active = value === rest.value && value ? "active" : "";
  const defaultShowBorderBottomTable =
    value === rest.value && showInitialTab ? "show_border_bottom" : "";

  const className = `arkyn_tab_button ${defaultShowBorderBottomTable} ${active} ${baseClassName}`;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    handleTabClick(event);
    onClick && onClick(event);
  }

  return (
    <button onClick={handleClick} className={className.trim()} {...rest}>
      {children}
    </button>
  );
}

export { TabButton };

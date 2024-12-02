import { TabButtonProps } from "@arkyn/types";
import { MouseEvent } from "react";

import { useTabContext } from "../TabContainer";
import "./styles.css";

function TabButton(props: TabButtonProps) {
  const { children, className: baseClassName = "", onClick, ...rest } = props;
  const { value, showInitialTab, handleTabClick } = useTabContext();

  const activeClass =
    value === rest.value && value ? "activeTrue" : "activeFalse";
  const defaultShowBorderBottomTable =
    value === rest.value && showInitialTab ? "showBorderBottom" : "";

  const className = `arkynTabButton ${defaultShowBorderBottomTable} ${activeClass} ${baseClassName}`;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    handleTabClick(event);
    onClick && onClick(event);
  }

  return (
    <button
      onClick={handleClick}
      className={className.trim()}
      {...rest}
      type="button"
    >
      {children}
    </button>
  );
}

export { TabButton };

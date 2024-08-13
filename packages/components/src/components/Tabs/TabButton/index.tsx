import { TabButtonProps } from "@arkyn/types";
import "./styles.css";

function TabButton(props: TabButtonProps) {
  const { children, value, className: baseClassName, ...rest } = props;

  const className = `arkyn_tab_button ${props.defaultActive ? "active" : ""} ${
    baseClassName || ""
  }`;

  return (
    <button className={className.trim()} {...rest}>
      {children}
    </button>
  );
}

export { TabButton };

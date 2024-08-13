import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.css";

type TabButtonProps = {
  children: ReactNode;
  value: string;
  defaultActive?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "value">;

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

import {
  HTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "./styles.css";

type TabContainerProps = {
  children: ReactNode;
  onClick?: (index: string) => void;
} & Omit<HTMLAttributes<HTMLElement>, "onClick" | "children" | "ref">;

function TabContainer(props: TabContainerProps) {
  const { children, onClick, className: baseClassName, ...rest } = props;

  const reference = useRef<HTMLElement>(null);
  const className = `arkyn_tab_container ${baseClassName || ""}`;

  const [activeLineStyle, setActiveLineStyle] = useState({
    width: "0px",
    left: "0px",
    transition: "none" as string | undefined,
  });

  const updateActiveLine = (
    button: HTMLButtonElement,
    applyTransition?: boolean
  ) => {
    const rect = button.getBoundingClientRect();
    const containerRect = reference.current!.getBoundingClientRect();

    const transition = applyTransition ? undefined : "none";

    setActiveLineStyle({
      transition,
      width: `${rect.width}px`,
      left: `${rect.left - containerRect.left}px`,
    });
  };

  useLayoutEffect(() => {
    const tabContainer = reference.current;
    if (!tabContainer) return;

    let activeButton: HTMLButtonElement | null = null;

    activeButton = tabContainer.querySelector("button.active");
    if (activeButton) updateActiveLine(activeButton);
  }, []);

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const tabContainer = reference.current;

    if (target && tabContainer && tabContainer.contains(target)) {
      const buttons = tabContainer.querySelectorAll("button");
      buttons.forEach((button) => button.classList.remove("active"));
      target.classList.add("active");

      updateActiveLine(target, true);
      onClick && onClick(target.value);
    }
  };

  return (
    <nav
      ref={reference}
      onClick={handleTabClick}
      className={className.trim()}
      {...rest}
    >
      {children}
      <div className="active-line" style={activeLineStyle} />
    </nav>
  );
}

export { TabContainer };

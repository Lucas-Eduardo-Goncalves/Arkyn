import { TabContainerProps } from "@arkyn/types";
import {
  createContext,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "./styles.css";

type TabContextType = {
  value: string;
  showInitialTab: boolean;
  handleTabClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const TabContext = createContext({} as TabContextType);

function useTabContext() {
  if (!TabContext)
    throw new Error("useTabContext must be used within a TabProvider");

  return useContext(TabContext);
}

function TabContainer(props: TabContainerProps) {
  const {
    children,
    onClick,
    defaultActive,
    className: baseClassName,
    ...rest
  } = props;

  const [value, setValue] = useState(defaultActive || "");
  const [showInitialTab, setShowInitialTab] = useState(true);

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

    setShowInitialTab(false);
    setActiveLineStyle({
      transition,
      width: `${rect.width}px`,
      left: `${rect.left - containerRect.left}px`,
    });
  };

  useEffect(() => {
    const tabContainer = reference.current;
    if (!tabContainer) return;

    let activeButton: HTMLButtonElement | null = null;

    activeButton = tabContainer.querySelector("button.active");
    if (activeButton) updateActiveLine(activeButton);
  }, []);

  const handleTabClick = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    if (target) {
      setValue(target.value);
      target.classList.add("active");

      updateActiveLine(target, true);
      onClick && onClick(target.value);
    }
  };

  return (
    <nav ref={reference} className={className.trim()} {...rest}>
      <TabContext.Provider value={{ handleTabClick, showInitialTab, value }}>
        {children}
      </TabContext.Provider>
      <div className="active-line" style={activeLineStyle} />
    </nav>
  );
}

export { TabContainer, useTabContext };

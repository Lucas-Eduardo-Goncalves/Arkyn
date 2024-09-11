import { AlertContainerProps } from "@arkyn/types";
import { createContext, ReactNode, useContext } from "react";

import "./styles.css";
import { AlertTitle } from "../AlertTitle";

const AlertContainerContext = createContext({} as AlertContainerProps);

function useAlertContainer() {
  return useContext(AlertContainerContext);
}

function AlertContainer(props: AlertContainerProps) {
  const { schema, children, className: baseClassName, ...rest } = props;

  const hasAlertTitle = (children: ReactNode): boolean => {
    let found = false;
    const searchForAlertTitle = (nodes: ReactNode) => {
      if (Array.isArray(nodes)) {
        nodes.forEach(searchForAlertTitle);
      } else if (nodes && typeof nodes === "object" && "type" in nodes) {
        if (nodes.type === AlertTitle) {
          found = true;
        } else if (nodes.props && nodes.props.children) {
          searchForAlertTitle(nodes.props.children);
        }
      }
    };
    searchForAlertTitle(children);
    return found;
  };

  const shouldAlignCenter = !hasAlertTitle(children);
  const finalClassName = shouldAlignCenter
    ? "existsAlertTitle"
    : "nonExistsAlertTitle";

  const className = `arkynAlertContainer ${schema} ${finalClassName} ${baseClassName}`;

  return (
    <AlertContainerContext.Provider value={props}>
      <div className={className.trim()} {...rest}>
        {children}
      </div>
    </AlertContainerContext.Provider>
  );
}

export { AlertContainer, useAlertContainer };

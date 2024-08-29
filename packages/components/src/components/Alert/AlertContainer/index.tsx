import { AlertContainerProps } from "@arkyn/types";
import { createContext, useContext } from "react";

import "./styles.css";

const AlertContainerContext = createContext({} as AlertContainerProps);

function useAlertContainer() {
  return useContext(AlertContainerContext);
}

function AlertContainer(props: AlertContainerProps) {
  const { schema, children, className: baseClassName, ...rest } = props;
  const className = `arkyn_alert ${schema} ${baseClassName}`;

  return (
    <AlertContainerContext.Provider value={props}>
      <div className={className.trim()} {...rest}>
        {children}
      </div>
    </AlertContainerContext.Provider>
  );
}

export { AlertContainer, useAlertContainer };

import { AlertContainerProps } from "@arkyn/types";
import { createContext, useContext } from "react";

import "./styles.css";

const AlertContainerContext = createContext({} as AlertContainerProps);

function useAlertContainer() {
  return useContext(AlertContainerContext);
}

function AlertContainer(props: AlertContainerProps) {
  const { schema, className: baseClassName, ...rest } = props;
  const className = `arkynAlertContainer ${schema} ${baseClassName}`;

  return (
    <AlertContainerContext.Provider value={props}>
      <div className={className.trim()} {...rest} />
    </AlertContainerContext.Provider>
  );
}

export { AlertContainer, useAlertContainer };

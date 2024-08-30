import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import "./styles.css";
const AlertContainerContext = createContext({});
function useAlertContainer() {
    return useContext(AlertContainerContext);
}
function AlertContainer(props) {
    const { schema, children, className: baseClassName, ...rest } = props;
    const className = `arkyn_alert ${schema} ${baseClassName}`;
    return (_jsx(AlertContainerContext.Provider, { value: props, children: _jsx("div", { className: className.trim(), ...rest, children: children }) }));
}
export { AlertContainer, useAlertContainer };

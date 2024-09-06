import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import "./styles.css";
const AlertContainerContext = createContext({});
function useAlertContainer() {
    return useContext(AlertContainerContext);
}
function AlertContainer(props) {
    const { schema, className: baseClassName, ...rest } = props;
    const className = `arkynAlertContainer ${schema} ${baseClassName}`;
    return (_jsx(AlertContainerContext.Provider, { value: props, children: _jsx("div", { className: className.trim(), ...rest }) }));
}
export { AlertContainer, useAlertContainer };

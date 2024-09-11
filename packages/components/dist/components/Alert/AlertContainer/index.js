import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import "./styles.css";
import { AlertTitle } from "../AlertTitle";
const AlertContainerContext = createContext({});
function useAlertContainer() {
    return useContext(AlertContainerContext);
}
function AlertContainer(props) {
    const { schema, children, className: baseClassName, ...rest } = props;
    const hasAlertTitle = (children) => {
        let found = false;
        const searchForAlertTitle = (nodes) => {
            if (Array.isArray(nodes)) {
                nodes.forEach(searchForAlertTitle);
            }
            else if (nodes && typeof nodes === "object" && "type" in nodes) {
                if (nodes.type === AlertTitle) {
                    found = true;
                }
                else if (nodes.props && nodes.props.children) {
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
    return (_jsx(AlertContainerContext.Provider, { value: props, children: _jsx("div", { className: className.trim(), ...rest, children: children }) }));
}
export { AlertContainer, useAlertContainer };

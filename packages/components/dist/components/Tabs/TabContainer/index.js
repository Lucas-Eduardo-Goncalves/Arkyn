import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef, useState, } from "react";
import "./styles.css";
const TabContext = createContext({});
function useTabContext() {
    if (!TabContext)
        throw new Error("useTabContext must be used within a TabProvider");
    return useContext(TabContext);
}
function TabContainer(props) {
    const { children, onClick, defaultActive, className: baseClassName, ...rest } = props;
    const [value, setValue] = useState(defaultActive || "");
    const [showInitialTab, setShowInitialTab] = useState(true);
    const reference = useRef(null);
    const className = `arkynTabContainer ${baseClassName || ""}`;
    const [activeLineStyle, setActiveLineStyle] = useState({
        width: "0px",
        left: "0px",
        transition: "none",
    });
    const updateActiveLine = (button, applyTransition) => {
        const rect = button.getBoundingClientRect();
        const containerRect = reference.current.getBoundingClientRect();
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
        if (!tabContainer)
            return;
        let activeButton = null;
        activeButton = tabContainer.querySelector("button.activeTrue");
        if (activeButton)
            updateActiveLine(activeButton);
    }, []);
    const handleTabClick = (event) => {
        const target = event.target;
        if (target) {
            setValue(target.value);
            target.classList.add("activeTrue");
            updateActiveLine(target, true);
            onClick && onClick(target.value);
        }
    };
    return (_jsxs("nav", { ref: reference, className: className.trim(), ...rest, children: [_jsx(TabContext.Provider, { value: { handleTabClick, showInitialTab, value }, children: children }), _jsx("div", { className: "activeLine", style: activeLineStyle })] }));
}
export { TabContainer, useTabContext };

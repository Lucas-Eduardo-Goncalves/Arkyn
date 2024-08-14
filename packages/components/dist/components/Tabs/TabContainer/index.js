import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
import "./styles.css";
function TabContainer(props) {
    const { children, onClick, className: baseClassName, ...rest } = props;
    const reference = useRef(null);
    const className = `arkyn_tab_container ${baseClassName || ""}`;
    const [activeLineStyle, setActiveLineStyle] = useState({
        width: "0px",
        left: "0px",
        transition: "none",
    });
    const updateActiveLine = (button, applyTransition) => {
        const rect = button.getBoundingClientRect();
        const containerRect = reference.current.getBoundingClientRect();
        const transition = applyTransition ? undefined : "none";
        setActiveLineStyle({
            transition,
            width: `${rect.width}px`,
            left: `${rect.left - containerRect.left}px`,
        });
    };
    useLayoutEffect(() => {
        const tabContainer = reference.current;
        if (!tabContainer)
            return;
        let activeButton = null;
        activeButton = tabContainer.querySelector("button.active");
        if (activeButton)
            updateActiveLine(activeButton);
    }, []);
    const handleTabClick = (event) => {
        const target = event.target;
        const tabContainer = reference.current;
        if (target && tabContainer && tabContainer.contains(target)) {
            const buttons = tabContainer.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            target.classList.add("active");
            updateActiveLine(target, true);
            onClick && onClick(target.value);
        }
    };
    return (_jsxs("nav", { ref: reference, onClick: handleTabClick, className: className.trim(), ...rest, children: [children, _jsx("div", { className: "active-line", style: activeLineStyle })] }));
}
export { TabContainer };

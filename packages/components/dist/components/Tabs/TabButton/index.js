import { jsx as _jsx } from "react/jsx-runtime";
import { useTabContext } from "../TabContainer";
import "./styles.css";
function TabButton(props) {
    const { children, className: baseClassName = "", onClick, ...rest } = props;
    const { value, showInitialTab, handleTabClick } = useTabContext();
    const activeClass = value === rest.value && value ? "activeTrue" : "activeFalse";
    const defaultShowBorderBottomTable = value === rest.value && showInitialTab ? "showBorderBottom" : "";
    const className = `arkynTabButton ${defaultShowBorderBottomTable} ${activeClass} ${baseClassName}`;
    function handleClick(event) {
        handleTabClick(event);
        onClick && onClick(event);
    }
    return (_jsx("button", { onClick: handleClick, className: className.trim(), ...rest, type: "button", children: children }));
}
export { TabButton };

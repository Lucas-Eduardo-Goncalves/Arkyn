import { jsx as _jsx } from "react/jsx-runtime";
import { useTabContext } from "../TabContainer";
import "./styles.css";
function TabButton(props) {
    const { children, className: baseClassName = "", onClick, ...rest } = props;
    const { value, showInitialTab, handleTabClick } = useTabContext();
    const active = value === rest.value && value ? "active" : "";
    const defaultShowBorderBottomTable = value === rest.value && showInitialTab ? "show_border_bottom" : "";
    const className = `arkyn_tab_button ${defaultShowBorderBottomTable} ${active} ${baseClassName}`;
    function handleClick(event) {
        handleTabClick(event);
        onClick && onClick(event);
    }
    return (_jsx("button", { onClick: handleClick, className: className.trim(), ...rest, children: children }));
}
export { TabButton };

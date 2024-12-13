import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";
function Popover(props) {
    const { children, button, closeOnClick, className: baseClassName = "", orientation = "bottomLeft", } = props;
    const [isOpen, setIsOpen] = useState(false);
    const visible = isOpen ? "visibleTrue" : "visibleFalse";
    const className = `arkynPopover ${orientation} ${visible} ${baseClassName}`;
    function handleOpenPopover() {
        if (!isOpen)
            setIsOpen(true);
    }
    return (_jsxs("div", { className: className, onClick: handleOpenPopover, children: [button, _jsx(motion.div, { style: { visibility: isOpen ? "visible" : "hidden" }, transition: { ease: "easeOut", duration: 0 }, initial: { opacity: 0 }, animate: { opacity: isOpen ? 1 : 0 }, exit: { opacity: 0 }, onClick: () => closeOnClick && setIsOpen(false), className: "arkynPopoverContent", children: children }), isOpen && (_jsx("div", { onClick: () => setIsOpen(false), className: "arkynPopoverOverlay" }))] }));
}
export { Popover };

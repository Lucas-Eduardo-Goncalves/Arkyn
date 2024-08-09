import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";
function Popover(props) {
    const { children, button, closeOnClick, orientation = "bottom-left" } = props;
    const [isOpen, setIsOpen] = useState(false);
    const className = `arkyn_popover ${orientation}`;
    return (_jsxs("div", { className: className, onClick: () => setIsOpen(true), children: [button, _jsx(motion.div, { style: { visibility: isOpen ? "visible" : "hidden" }, transition: { ease: "easeOut", duration: 0 }, initial: { opacity: 0 }, animate: { opacity: isOpen ? 1 : 0 }, exit: { opacity: 0 }, onClick: () => closeOnClick && setIsOpen(false), className: "arkyn_popover-content", children: children }), isOpen && (_jsx("span", { onClick: () => setIsOpen(false), className: "arkyn_popover-overlay" }))] }));
}
export { Popover };

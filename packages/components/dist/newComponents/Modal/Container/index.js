import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";
import "./styles.css";
const modalContext = createContext({});
function Container(args) {
    const { isVisibled, makeInvisible, children, className: baseClassName = "", ...rest } = args;
    const visibled = isVisibled ? "visible" : "";
    const className = `arkyn_modal_container ${visibled} ${baseClassName}`;
    return (_jsx(modalContext.Provider, { value: { makeInvisible }, children: _jsx(AnimatePresence, { children: isVisibled && (_jsxs("aside", { className: className.trim(), ...rest, children: [_jsx(motion.div, { className: "overlay", transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: makeInvisible }), _jsx(motion.div, { className: "content", transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0, scale: 0.75 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, children: children })] })) }) }));
}
export { Container, modalContext };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";
import "./styles.css";
const drawerContext = createContext({});
function DrawerContainer(props) {
    const { isVisibled, makeInvisible, orientation = "left", children, className: baseClassName, ...rest } = props;
    const translateX = orientation === "left" ? "-100%" : "100%";
    const visibled = isVisibled ? "visible" : "";
    const className = `arkyn_drawer_container ${orientation} ${visibled} ${baseClassName}`;
    return (_jsx(drawerContext.Provider, { value: { makeInvisible }, children: _jsx(AnimatePresence, { children: isVisibled && (_jsxs("aside", { className: className.trim(), ...rest, children: [_jsx(motion.div, { className: "arkyn_drawer_container-overlay", transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: makeInvisible }), _jsx(motion.div, { className: "arkyn_drawer_container-content", transition: { ease: "easeOut", duration: 0.15 }, initial: { transform: `translateX(${translateX})` }, animate: { transform: "translateX(0px)" }, exit: { transform: `translateX(${translateX})` }, children: children })] })) }) }));
}
export { DrawerContainer, drawerContext };

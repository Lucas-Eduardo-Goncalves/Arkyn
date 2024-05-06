import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";
import * as React from "react";
import "./styles.css";
const modalContext = createContext({});
function Container(args) {
    const { isVisibled, makeInvisible, children, className: baseClassName = "", ...rest } = args;
    const visibled = isVisibled ? "visible" : "";
    const className = `arkyn_modal_container ${visibled} ${baseClassName}`;
    return (React.createElement(modalContext.Provider, { value: { makeInvisible } },
        React.createElement(AnimatePresence, null, isVisibled && (React.createElement("aside", { className: className.trim(), ...rest },
            React.createElement(motion.div, { className: "overlay", transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: makeInvisible }),
            React.createElement(motion.div, { className: "content", transition: { duration: 0.15, ease: "easeOut" }, initial: { opacity: 0, scale: 0.75 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 } }, children))))));
}
export { Container, modalContext };

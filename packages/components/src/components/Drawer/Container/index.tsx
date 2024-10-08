import { AnimatePresence, motion } from "framer-motion";
import { DrawerContainerProps } from "@arkyn/types";
import { createContext } from "react";

import "./styles.css";

type DrawerContext = { makeInvisible: () => void };
const drawerContext = createContext({} as DrawerContext);

function DrawerContainer(props: DrawerContainerProps) {
  const {
    isVisibled,
    makeInvisible,
    orientation = "left",
    children,
    className: baseClassName,
    ...rest
  } = props;

  const translateX = orientation === "left" ? "-100%" : "100%";

  const visibledClass = isVisibled ? "visibleTrue" : "visibleFalse";
  const className = `arkynDrawerContainer ${orientation} ${visibledClass} ${baseClassName}`;

  return (
    <drawerContext.Provider value={{ makeInvisible }}>
      <AnimatePresence>
        {isVisibled && (
          <aside className={className.trim()} {...rest}>
            <motion.div
              className="arkynDrawerContainerOverlay"
              transition={{ duration: 0.15, ease: "easeOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={makeInvisible}
            />

            <motion.div
              className="arkynDrawerContainerContent"
              transition={{ ease: "easeOut", duration: 0.15 }}
              initial={{ transform: `translateX(${translateX})` }}
              animate={{ transform: "translateX(0px)" }}
              exit={{ transform: `translateX(${translateX})` }}
            >
              {children}
            </motion.div>
          </aside>
        )}
      </AnimatePresence>
    </drawerContext.Provider>
  );
}

export { DrawerContainer, drawerContext };

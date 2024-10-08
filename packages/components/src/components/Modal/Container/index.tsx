import { ModalContainerProps } from "@arkyn/types";
import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";

import "./styles.css";

type ModalContext = { makeInvisible: () => void };
const modalContext = createContext({} as ModalContext);

function ModalContainer(args: ModalContainerProps) {
  const {
    isVisibled,
    makeInvisible,
    children,
    className: baseClassName = "",
    ...rest
  } = args;

  const visibleClass = isVisibled ? "visibleTrue" : "visibleFalse";
  const className = `arkynModalContainer ${visibleClass} ${baseClassName}`;

  return (
    <modalContext.Provider value={{ makeInvisible }}>
      <AnimatePresence>
        {isVisibled && (
          <aside className={className.trim()} {...rest}>
            <motion.div
              className="arkynModalContainerOverlay"
              transition={{ duration: 0.15, ease: "easeOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={makeInvisible}
            />

            <motion.div
              className="arkynModalContainerContent"
              transition={{ duration: 0.15, ease: "easeOut" }}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {children}
            </motion.div>
          </aside>
        )}
      </AnimatePresence>
    </modalContext.Provider>
  );
}

export { ModalContainer, modalContext };

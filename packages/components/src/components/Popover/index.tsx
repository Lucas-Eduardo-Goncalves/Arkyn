import { PopoverProps } from "@arkyn/types";
import { motion } from "framer-motion";
import { useState } from "react";

import "./styles.css";

function Popover(props: PopoverProps) {
  const { children, button, closeOnClick, orientation = "bottom-left" } = props;
  const [isOpen, setIsOpen] = useState(false);

  const className = `arkyn_popover ${orientation} ${isOpen ? "show" : ""}`;

  function handleOpenPopover() {
    if (!isOpen) setIsOpen(true);
  }

  return (
    <div className={className} onClick={handleOpenPopover}>
      {button}

      <motion.div
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        transition={{ ease: "easeOut", duration: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        onClick={() => closeOnClick && setIsOpen(false)}
        className="arkyn_popover-content"
      >
        {children}
      </motion.div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="arkyn_popover-overlay"
        />
      )}
    </div>
  );
}

export { Popover };

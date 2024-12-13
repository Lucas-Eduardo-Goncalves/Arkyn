import { PopoverProps } from "@arkyn/types";
import { motion } from "framer-motion";
import { useState } from "react";

import "./styles.css";

function Popover(props: PopoverProps) {
  const {
    children,
    button,
    closeOnClick,
    className: baseClassName = "",
    orientation = "bottomLeft",
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const visible = isOpen ? "visibleTrue" : "visibleFalse";
  const className = `arkynPopover ${orientation} ${visible} ${baseClassName}`;

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
        className="arkynPopoverContent"
      >
        {children}
      </motion.div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="arkynPopoverOverlay" />
      )}
    </div>
  );
}

export { Popover };

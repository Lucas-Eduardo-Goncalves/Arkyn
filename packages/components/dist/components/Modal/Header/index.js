import { X } from "lucide-react";
import { useContext } from "react";
import * as React from "react";
import { modalContext } from "../Container";
import "./styles.css";
function Header(args) {
    const { showCloseButton, className: baseClassName, children, ...rest } = args;
    const { makeInvisible } = useContext(modalContext);
    const show = showCloseButton ? "show-close" : "";
    const className = `arkyn_modal_header ${show} ${baseClassName}`;
    return (React.createElement("header", { className: className.trim(), ...rest },
        children,
        React.createElement("button", { type: "button", onClick: makeInvisible },
            React.createElement(X, { size: 24 }))));
}
export { Header };

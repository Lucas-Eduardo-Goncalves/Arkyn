import "./styles.css";
function Tooltip(args) {
    const { text, size = "lg", children, orientation = "top", className, ...rest } = args;
    return (React.createElement("div", { className: `arkyn_tooltip ${size} ${orientation} ${className}`, ...rest },
        children,
        React.createElement("div", { className: "arkyn_tooltip_text" }, text)));
}
export { Tooltip };

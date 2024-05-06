import "./styles.css";
function Divider(args) {
    const { className: baseClassName, orientation = "horizontal", ...rest } = args;
    const className = `arkyn_divider ${orientation} ${baseClassName}`;
    return React.createElement("div", { className: className, ...rest });
}
export { Divider };

import "./styles.css";
function Footer(args) {
    const { alignment = "right", className: baseClassName, ...rest } = args;
    const className = `arkyn_modal_footer ${alignment} ${baseClassName}`;
    return <footer className={className.trim()} {...rest}/>;
}
export { Footer };

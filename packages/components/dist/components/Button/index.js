import { Loader2 } from "lucide-react";
import { buildButtonConfig } from "../../config/buildButtonConfig";
import "./styles.css";
function Button(args) {
    const { leftIcon, rightIcon, iconSize, children, loadingText, ...rest } = buildButtonConfig(args);
    return (React.createElement("button", { ...rest },
        React.createElement("div", { className: "spinner" },
            React.createElement(Loader2, { size: iconSize, strokeWidth: 2.5 }),
            loadingText && loadingText),
        React.createElement("div", { className: "content" },
            leftIcon,
            children,
            rightIcon)));
}
export { Button };

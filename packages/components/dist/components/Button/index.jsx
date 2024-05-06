import { Loader2 } from "lucide-react";
import { buildButtonConfig } from "../../config/buildButtonConfig";
import "./styles.css";
function Button(args) {
    const { leftIcon, rightIcon, iconSize, children, loadingText, ...rest } = buildButtonConfig(args);
    return (<button {...rest}>
      <div className="spinner">
        <Loader2 size={iconSize} strokeWidth={2.5}/>
        {loadingText && loadingText}
      </div>

      <div className="content">
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </button>);
}
export { Button };

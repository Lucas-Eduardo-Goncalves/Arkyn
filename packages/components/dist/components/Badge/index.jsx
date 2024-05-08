import { buildBadgeConfig } from "../../config/buildBadgeConfig";
import "./styles.css";
function Badge(args) {
    const { leftIcon, children, rightIcon, ...rest } = buildBadgeConfig(args);
    return (<div {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </div>);
}
export { Badge };

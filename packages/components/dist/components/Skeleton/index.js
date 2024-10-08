import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Skeleton(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynSkeleton ${baseClassName}`;
    return _jsx("aside", { className: className.trim(), ...rest });
}
export { Skeleton };

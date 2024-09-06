import { jsx as _jsx } from "react/jsx-runtime";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { useAlertContainer } from "../AlertContainer";
import "./styles.css";
function AlertIcon(props) {
    const { className: baseClassName, ...rest } = props;
    const { schema } = useAlertContainer();
    const className = `arkynAlertIcon ${schema} ${baseClassName}`;
    switch (schema) {
        case "success":
            return _jsx(CheckCircle2, { className: className, ...rest });
        case "danger":
            return _jsx(XCircle, { className: className, ...rest });
        case "warning":
            return _jsx(AlertTriangle, { className: className, ...rest });
        case "info":
            return _jsx(Info, { className: className, ...rest });
    }
}
export { AlertIcon };

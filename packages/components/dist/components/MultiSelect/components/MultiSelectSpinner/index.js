import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import "./styles.css";
function MultiSelectSpinner(props) {
    const { iconSize, isLoading } = props;
    if (!isLoading)
        return _jsx(_Fragment, {});
    return (_jsx(Loader2, { className: "arkynMultiSelectSpinner", size: iconSize, strokeWidth: 2.5 }));
}
export { MultiSelectSpinner };

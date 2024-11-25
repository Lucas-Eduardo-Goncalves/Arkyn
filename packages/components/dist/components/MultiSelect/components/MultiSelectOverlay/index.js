import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function MultiSelectOverlay(props) {
    const { isFocused, handleBlur } = props;
    if (!isFocused)
        return _jsx(_Fragment, {});
    return _jsx("aside", { className: "arkynMultiSelectOverlay", onClick: handleBlur });
}
export { MultiSelectOverlay };

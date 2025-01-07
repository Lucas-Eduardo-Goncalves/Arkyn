import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./styles.css";
function FileUploadError(props) {
    const { error } = props;
    const className = `arkynFileUploadError`;
    if (error)
        return _jsx("strong", { className: className, children: error });
    return _jsx(_Fragment, {});
}
export { FileUploadError };

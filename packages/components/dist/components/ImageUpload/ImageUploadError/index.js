import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./styles.css";
function ImageUploadError(props) {
    const { error } = props;
    const className = `arkynImageUploadError`;
    if (error)
        return _jsx("strong", { className: className, children: error });
    return _jsx(_Fragment, {});
}
export { ImageUploadError };

import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { GoogleTagManager } from "./googleTagManager";
function GoogleTagManagerClient(props) {
    const googleTagManager = new GoogleTagManager();
    googleTagManager.initialize(props);
    return _jsx(_Fragment, {});
}
export { GoogleTagManagerClient };

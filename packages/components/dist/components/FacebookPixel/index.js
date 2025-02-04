import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { ClientOnly } from "../ClientOnly";
import { FacebookPixelClient } from "./FacebookPixel.client";
function FacebookPixel(props) {
    if (process.env.NODE_ENV !== "production" && !props.showInDevMode) {
        return _jsx(_Fragment, {});
    }
    return _jsx(ClientOnly, { children: () => _jsx(FacebookPixelClient, { ...props }) });
}
export { FacebookPixel };

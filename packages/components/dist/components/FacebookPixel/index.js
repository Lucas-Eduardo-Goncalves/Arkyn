import { jsx as _jsx } from "react/jsx-runtime";
import { ClientOnly } from "../ClientOnly";
import { FacebookPixelClient } from "./FacebookPixel.client";
function FacebookPixel(props) {
    return _jsx(ClientOnly, { children: () => _jsx(FacebookPixelClient, { ...props }) });
}
export { FacebookPixel };

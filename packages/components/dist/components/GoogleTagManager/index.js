import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { ClientOnly } from "../../components/ClientOnly";
import { GoogleTagManagerClient } from "./GoogleTagManager.client";
function GoogleTagManager(props) {
    const { gtmId, auth = "", preview = "", dataLayerName = "dataLayer", events = {}, dataLayer = {}, showInDevMode = false, } = props;
    if (process.env.NODE_ENV !== "production" && !showInDevMode) {
        return _jsx(_Fragment, {});
    }
    return (_jsx(ClientOnly, { children: () => (_jsx(GoogleTagManagerClient, { auth: auth, dataLayer: dataLayer, dataLayerName: dataLayerName, events: events, gtmId: gtmId, preview: preview })) }));
}
export { GoogleTagManager };

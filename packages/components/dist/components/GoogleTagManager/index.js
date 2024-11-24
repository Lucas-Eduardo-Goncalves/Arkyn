import { jsx as _jsx } from "react/jsx-runtime";
import { ClientOnly } from "../../components/ClientOnly";
import { GoogleTagManagerClient } from "./GoogleTagManager.client";
function GoogleTagManager(props) {
    const { gtmId, auth = "", preview = "", dataLayerName = "dataLayer", events = {}, dataLayer = {}, } = props;
    return (_jsx(ClientOnly, { children: () => (_jsx(GoogleTagManagerClient, { auth: auth, dataLayer: dataLayer, dataLayerName: dataLayerName, events: events, gtmId: gtmId, preview: preview })) }));
}
export { GoogleTagManager };

import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { FacebookPixel } from "./pixel";
function FacebookPixelClient(props) {
    const { pixelId, options, pageView, track, trackCustom, trackSingle, trackSingleCustom, grantConsent, revokeConsent, } = props;
    const pixel = new FacebookPixel(pixelId, options);
    pixel.init();
    if (pageView)
        pixel.pageView();
    if (grantConsent)
        pixel.grantConsent();
    if (revokeConsent)
        pixel.revokeConsent();
    if (track)
        pixel.track(...track);
    if (trackCustom)
        pixel.trackCustom(...trackCustom);
    if (trackSingle)
        pixel.trackSingle(pixelId, ...trackSingle);
    if (trackSingleCustom)
        pixel.trackSingleCustom(pixelId, ...trackSingleCustom);
    return _jsx(_Fragment, {});
}
export { FacebookPixelClient };

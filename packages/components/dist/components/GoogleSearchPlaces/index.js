import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "../Input";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
function GoogleSearchPlaces({ googleMapsApiKey, onLoad, onPlacesChanged, options, ...rest }) {
    return (_jsx(LoadScript, { libraries: ["places"], googleMapsApiKey: googleMapsApiKey, loadingElement: _jsx(Input, { type: "text", ...rest }), children: _jsx(StandaloneSearchBox, { onLoad: onLoad, onPlacesChanged: onPlacesChanged, options: options, children: _jsx(Input, { type: "text", ...rest }) }) }));
}
export { GoogleSearchPlaces };

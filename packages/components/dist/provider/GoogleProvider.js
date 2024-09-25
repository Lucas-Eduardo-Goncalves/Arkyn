import { jsx as _jsx } from "react/jsx-runtime";
import { LoadScript } from "@react-google-maps/api";
function GoogleProvider({ googleMapsApiKey, children, ...props }) {
    return (_jsx(LoadScript, { libraries: ["places", "marker", "maps"], googleMapsApiKey: googleMapsApiKey, ...props, children: children }));
}
export { GoogleProvider };

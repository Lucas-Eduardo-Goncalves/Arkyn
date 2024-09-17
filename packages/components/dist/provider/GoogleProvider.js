import { jsx as _jsx } from "react/jsx-runtime";
import { LoadScript } from "@react-google-maps/api";
function GoogleProvider(props) {
    const googleKey = props.googleMapsApiKey + "&loading=async&callback=initMap";
    return (_jsx(LoadScript, { googleMapsApiKey: googleKey, version: "weekly", ...props }));
}
export { GoogleProvider };

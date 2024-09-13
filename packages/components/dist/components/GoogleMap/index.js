import { jsx as _jsx } from "react/jsx-runtime";
import { LoadScript, GoogleMap as Map, Marker } from "@react-google-maps/api";
import { LoaderIcon, MapPinned } from "lucide-react";
import "./styles.css";
function GoogleMap({ coordinates, zoom = 18, draggable = false, googleMapsApiKey, className, ...rest }) {
    if (!coordinates) {
        return (_jsx("div", { className: "arkynGoogleMapPinnedEmpty " + className, ...rest, children: _jsx(MapPinned, {}) }));
    }
    return (_jsx("div", { className: "arkynGoogleMapPinned " + className, ...rest, children: _jsx(LoadScript, { libraries: ["maps", "marker"], googleMapsApiKey: googleMapsApiKey, loadingElement: _jsx("div", { className: "arkynGoogleMapPinnedEmpty " + className, ...rest, children: _jsx(LoaderIcon, {}) }), children: _jsx(Map, { zoom: zoom, center: coordinates, mapContainerStyle: {
                    borderRadius: "var(--rounded-cards)",
                    width: "100%",
                    height: "100%",
                }, children: _jsx(Marker, { draggable: draggable, position: coordinates }) }) }) }));
}
export { GoogleMap };

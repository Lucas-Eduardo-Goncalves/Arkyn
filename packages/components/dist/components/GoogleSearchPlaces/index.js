import { jsx as _jsx } from "react/jsx-runtime";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";
import { Input } from "../Input";
function GoogleSearchPlaces({ googleMapsApiKey, onChange, options, ...rest }) {
    const [searchBox, setSearchBox] = useState(null);
    const handleLoad = (ref) => setSearchBox(ref);
    const handlePlacesChanged = () => {
        const places = searchBox.getPlaces();
        const place = places[0];
        const address_components = place?.address_components;
        function findData(key) {
            const data = address_components.find((item) => item.types[0] === key);
            if (data)
                return data.long_name;
            return "";
        }
        if (place) {
            const street = findData("route");
            const district = findData("sublocality_level_1");
            const city = findData("administrative_area_level_2");
            const state = findData("administrative_area_level_1");
            const cep = findData("postal_code");
            const sendPlace = { street, city, state, district, cep };
            onChange && onChange(sendPlace);
        }
    };
    return (_jsx(LoadScript, { libraries: ["places"], googleMapsApiKey: googleMapsApiKey, loadingElement: _jsx(Input, { type: "text", ...rest }), children: _jsx(StandaloneSearchBox, { onLoad: handleLoad, onPlacesChanged: handlePlacesChanged, options: options, children: _jsx(Input, { type: "text", ...rest }) }) }));
}
export { GoogleSearchPlaces };

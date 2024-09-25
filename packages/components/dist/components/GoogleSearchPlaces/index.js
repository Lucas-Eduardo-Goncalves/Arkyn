import { jsx as _jsx } from "react/jsx-runtime";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";
import { Input } from "../Input";
function GoogleSearchPlaces({ onChange, onPlaceChanged, options, ...rest }) {
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
        function findDataShort(key) {
            const data = address_components.find((item) => item.types[0] === key);
            if (data)
                return data.short_name;
            return "";
        }
        if (place) {
            const street = findData("route");
            const streetNumber = findData("street_number");
            const district = findData("sublocality_level_1");
            const city = findData("administrative_area_level_2");
            const state = findData("administrative_area_level_1");
            const stateShortName = findDataShort("administrative_area_level_1");
            const cep = findData("postal_code");
            const lat = place.geometry?.location?.lat();
            const lng = place.geometry?.location?.lng();
            const sendPlace = {
                street,
                city,
                state,
                district,
                cep,
                streetNumber,
                stateShortName,
                coordinates: { lat, lng },
            };
            onPlaceChanged && onPlaceChanged(sendPlace);
        }
    };
    return (_jsx(StandaloneSearchBox, { onLoad: handleLoad, onPlacesChanged: handlePlacesChanged, options: options, children: _jsx(Input, { type: "text", onChange: (e) => onChange(e.target.value), ...rest }) }));
}
export { GoogleSearchPlaces };

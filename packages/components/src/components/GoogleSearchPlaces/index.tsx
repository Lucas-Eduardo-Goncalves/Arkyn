import { GoogleSearchPlacesProps } from "@arkyn/types";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";

import { Input } from "../Input";

type AddressComponentsType = {
  long_name: string;
  short_name: string;
  types: string[];
}[];

function GoogleSearchPlaces({
  googleMapsApiKey,
  onChange,
  options,
  ...rest
}: GoogleSearchPlacesProps) {
  const [searchBox, setSearchBox] = useState<any>(null);
  const handleLoad = (ref: any) => setSearchBox(ref);

  const handlePlacesChanged = () => {
    const places = searchBox.getPlaces();
    const place = places[0];

    const address_components =
      place?.address_components as AddressComponentsType;

    function findData(key: string) {
      const data = address_components.find((item) => item.types[0] === key);
      if (data) return data.long_name;
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

  return (
    <LoadScript
      libraries={["places"]}
      googleMapsApiKey={googleMapsApiKey}
      loadingElement={<Input type="text" {...rest} />}
    >
      <StandaloneSearchBox
        onLoad={handleLoad}
        onPlacesChanged={handlePlacesChanged}
        options={options}
      >
        <Input type="text" {...rest} />
      </StandaloneSearchBox>
    </LoadScript>
  );
}

export { GoogleSearchPlaces };

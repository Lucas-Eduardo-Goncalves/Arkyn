import { GoogleSearchPlacesProps } from "@arkyn/types";
import { Input } from "../Input";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

function GoogleSearchPlaces({
  googleMapsApiKey,
  onLoad,
  onPlacesChanged,
  options,
  ...rest
}: GoogleSearchPlacesProps) {
  return (
    <LoadScript
      libraries={["places"]}
      googleMapsApiKey={googleMapsApiKey}
      loadingElement={<Input type="text" {...rest} />}
    >
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
        options={options}
      >
        <Input type="text" {...rest} />
      </StandaloneSearchBox>
    </LoadScript>
  );
}

export { GoogleSearchPlaces };

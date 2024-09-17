import { GoogleProviderProps } from "@arkyn/types";
import { LoadScript } from "@react-google-maps/api";

function GoogleProvider(props: GoogleProviderProps) {
  const googleKey = props.googleMapsApiKey + "&loading=async&callback=initMap";
  return (
    <LoadScript googleMapsApiKey={googleKey} version="weekly" {...props} />
  );
}

export { GoogleProvider };

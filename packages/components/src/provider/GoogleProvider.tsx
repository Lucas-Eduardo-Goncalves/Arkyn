import { GoogleProviderProps } from "@arkyn/types";
import { LoadScript } from "@react-google-maps/api";

function GoogleProvider({
  googleMapsApiKey,
  children,
  ...props
}: GoogleProviderProps) {
  return (
    <LoadScript
      libraries={["places", "marker", "maps"]}
      googleMapsApiKey={googleMapsApiKey}
      {...props}
    >
      {children}
    </LoadScript>
  );
}

export { GoogleProvider };

import { GoogleMapProps } from "@arkyn/types";
import { LoadScript, GoogleMap as Map, Marker } from "@react-google-maps/api";
import { LoaderIcon, MapPinned } from "lucide-react";

import "./styles.css";

function GoogleMap({
  coordinates,
  zoom = 18,
  draggable = false,
  googleMapsApiKey,
  className,
  ...rest
}: GoogleMapProps) {
  if (!coordinates) {
    return (
      <div className={"arkynGoogleMapPinnedEmpty " + className} {...rest}>
        <MapPinned />
      </div>
    );
  }

  return (
    <div className={"arkynGoogleMapPinned " + className} {...rest}>
      <LoadScript
        libraries={["maps", "marker"]}
        googleMapsApiKey={googleMapsApiKey}
        loadingElement={
          <div className={"arkynGoogleMapPinnedEmpty " + className} {...rest}>
            <LoaderIcon />
          </div>
        }
      >
        <Map
          zoom={zoom}
          center={coordinates}
          mapContainerStyle={{
            borderRadius: "var(--rounded-cards)",
            width: "100%",
            height: "100%",
          }}
        >
          <Marker draggable={draggable} position={coordinates} />
        </Map>
      </LoadScript>
    </div>
  );
}

export { GoogleMap };

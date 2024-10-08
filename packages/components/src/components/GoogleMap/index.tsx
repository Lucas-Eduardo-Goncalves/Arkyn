import { GoogleMapProps } from "@arkyn/types";
import { GoogleMap as Map, Marker } from "@react-google-maps/api";
import { MapPinned } from "lucide-react";

import "./styles.css";

function GoogleMap({
  coordinates,
  zoom = 18,
  draggable = false,
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
    </div>
  );
}

export { GoogleMap };

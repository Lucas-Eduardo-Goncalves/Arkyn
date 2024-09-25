import type { StandaloneSearchBoxProps } from "@react-google-maps/api";
import type { SimpleInputProps } from "./InputProps";

type GoogleSearchPlacesProps = {
  onChange?: (e: string) => void;
  onPlaceChanged?: (e: {
    street: string;
    city: string;
    state: string;
    district: string;
    cep: string;
    stateShortName: string;
    streetNumber: string;
    coordinates: { lat: number; lng: number };
  }) => void;
  options?: StandaloneSearchBoxProps["options"];
} & Omit<SimpleInputProps, "onLoad" | "onChange" | "type">;

export type { GoogleSearchPlacesProps };

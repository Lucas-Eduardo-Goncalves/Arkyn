import type { StandaloneSearchBoxProps } from "@react-google-maps/api";
import type { SimpleInputProps } from "./InputProps";

type GoogleSearchPlacesProps = {
  googleMapsApiKey: string;
  onChange?: (e: {
    street: string;
    city: string;
    state: string;
    district: string;
    cep: string;
  }) => void;
  options?: StandaloneSearchBoxProps["options"];
} & Omit<SimpleInputProps, "onLoad" | "onChange" | "type">;

export type { GoogleSearchPlacesProps };

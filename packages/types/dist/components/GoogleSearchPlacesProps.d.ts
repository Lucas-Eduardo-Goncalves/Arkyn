import type { SimpleInputProps } from "./InputProps";
import type { StandaloneSearchBoxProps } from "@react-google-maps/api";
type GoogleSearchPlacesProps = {
    googleMapsApiKey: string;
    onLoad?: StandaloneSearchBoxProps["onLoad"];
    onPlacesChanged?: StandaloneSearchBoxProps["onPlacesChanged"];
    options?: StandaloneSearchBoxProps["options"];
} & Omit<SimpleInputProps, "onLoad" | "options" | "onPlacesChanged" | "type">;
export type { GoogleSearchPlacesProps };
//# sourceMappingURL=GoogleSearchPlacesProps.d.ts.map
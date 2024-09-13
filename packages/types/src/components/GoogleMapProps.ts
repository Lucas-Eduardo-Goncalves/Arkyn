import type { HtmlHTMLAttributes } from "react";

type GoogleMapProps = {
  googleMapsApiKey: string;
  zoom?: number;
  draggable?: boolean;
  coordinates?: { lat: number; lng: number };
} & HtmlHTMLAttributes<HTMLDivElement>;

export type { GoogleMapProps };

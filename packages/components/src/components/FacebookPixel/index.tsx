import { FacebookPixelProps } from "@arkyn/types";

import { ClientOnly } from "../ClientOnly";
import { FacebookPixelClient } from "./FacebookPixel.client";

function FacebookPixel(props: FacebookPixelProps) {
  if (process.env.NODE_ENV !== "production" && !props.showInDevMode) {
    return <></>;
  }

  return <ClientOnly>{() => <FacebookPixelClient {...props} />}</ClientOnly>;
}

export { FacebookPixel };

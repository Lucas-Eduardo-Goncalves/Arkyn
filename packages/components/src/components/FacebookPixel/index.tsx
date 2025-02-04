import { FacebookPixelProps } from "@arkyn/types";

import { ClientOnly } from "../ClientOnly";
import { FacebookPixelClient } from "./FacebookPixel.client";

function FacebookPixel(props: FacebookPixelProps) {
  return <ClientOnly>{() => <FacebookPixelClient {...props} />}</ClientOnly>;
}

export { FacebookPixel };

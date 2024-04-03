import { V1Client } from "~/modules/V1/client";

export const meta = V1Client.meta;

export default function LayoutRoute() {
  return <V1Client.View />;
}

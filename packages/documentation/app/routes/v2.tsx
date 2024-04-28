import { V2Client } from "~/modules/V2/client";
import { V2Server } from "~/modules/V2/server";

export const loader = V2Server.loader;

export const meta = V2Client.meta;

export default function LayoutRoute() {
  return <V2Client.View />;
}

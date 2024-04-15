import { ServerBadRequestClient } from "~/modules/ServerBadRequest/client";

export const meta = ServerBadRequestClient.meta;

export default function BadRequestRoute() {
  return <ServerBadRequestClient.View />;
}

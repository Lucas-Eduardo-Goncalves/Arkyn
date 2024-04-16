import { ServerGetScopedParamsClient } from "~/modules/ServerGetScopedParams/client";

export const meta = ServerGetScopedParamsClient.meta;

export default function GetScopedParamsRoute() {
  return <ServerGetScopedParamsClient.View />;
}

import { GetStartedClient } from "~/modules/GetStarted/client";

export const meta = GetStartedClient.meta;

export default function GetStartedRoute() {
  return <GetStartedClient.View />;
}

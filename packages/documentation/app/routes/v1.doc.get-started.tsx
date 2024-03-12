import { GetStartedClient } from "~/modules/GetStarted";

export const meta = GetStartedClient.meta;

export default function GetStartedRoute() {
  return <GetStartedClient.View />;
}

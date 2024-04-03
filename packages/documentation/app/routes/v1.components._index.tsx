import { ArkynComponentsClient } from "~/modules/@arkyn-components/client";

export const meta = ArkynComponentsClient.meta;

export default function ArkynComponentsRoute() {
  return <ArkynComponentsClient.View />;
}

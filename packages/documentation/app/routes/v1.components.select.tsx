import { ComponentSelectClient } from "~/modules/ComponentSelect/client";

export const meta = ComponentSelectClient.meta;

export default function SelectRoute() {
  return <ComponentSelectClient.View />;
}

import { ComponentBadgeClient } from "~/modules/ComponentBadge/client";

export const meta = ComponentBadgeClient.meta;

export default function BadgeRoute() {
  return <ComponentBadgeClient.View />;
}

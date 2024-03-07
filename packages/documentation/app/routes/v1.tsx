import { LayoutClient, LayoutServer } from "~/modules/Layout";

export const action = LayoutServer.action;
export const loader = LayoutServer.loader;

export default function LayoutRoute() {
  return <LayoutClient.View />;
}

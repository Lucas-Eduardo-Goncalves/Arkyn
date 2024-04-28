import { ChannelsClient } from "~/modules/Channels/client";
import { ChannelsServer } from "~/modules/Channels/server";

export const action = ChannelsServer.action;
export const loader = ChannelsServer.loader;

export const meta = ChannelsClient.meta;

export default function ChannelsRoute() {
  return <ChannelsClient.View />;
}

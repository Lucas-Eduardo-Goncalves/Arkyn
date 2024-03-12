import { RootClient } from "./modules/Root";

export const Layout = RootClient.Layout;

export default function RootRoute() {
  return <RootClient.View />;
}

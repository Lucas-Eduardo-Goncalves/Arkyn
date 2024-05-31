import "@arkyn/components/dist/style.css";
import { RootClient } from "./modules/Root/client";

export const meta = RootClient.meta;
export const Layout = RootClient.Document;

export default function RootRoute() {
  return <RootClient.View />;
}

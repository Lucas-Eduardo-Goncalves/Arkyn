import { SharedRegexClient } from "~/modules/SharedRegex/client";

export const meta = SharedRegexClient.meta;

export default function SharedRegexRoute() {
  return <SharedRegexClient.View />;
}

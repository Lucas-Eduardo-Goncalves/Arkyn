import { SharedGenerateColorByStringClient } from "~/modules/SharedGenerateColorByString/client";

export const meta = SharedGenerateColorByStringClient.meta;

export default function SharedGenerateColorByStringRoute() {
  return <SharedGenerateColorByStringClient.View />;
}

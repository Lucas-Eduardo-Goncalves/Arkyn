import { SharedGenerateSlugClient } from "~/modules/SharedGenerateSlug/client";

export const meta = SharedGenerateSlugClient.meta;

export default function SharedGenerateSlugRoute() {
  return <SharedGenerateSlugClient.View />;
}

import { IntroductionClient } from "~/modules/Introduction/client";

export const meta = IntroductionClient.meta;

export default function IntroductionRoute() {
  return <IntroductionClient.View />;
}

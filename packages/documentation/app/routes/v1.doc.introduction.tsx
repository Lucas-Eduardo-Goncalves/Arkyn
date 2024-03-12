import { IntroductionClient } from "~/modules/Introduction";

export const meta = IntroductionClient.meta;

export default function IntroductionRoute() {
  return <IntroductionClient.View />;
}

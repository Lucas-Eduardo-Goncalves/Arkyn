import { useAutomation } from "@arkyn/components";
import { IntroductionClient } from "~/modules/Introduction/client";

export const meta = IntroductionClient.meta;

export function action() {
  return { closeModalKey: "introduction-modal" };
}

export default function IntroductionRoute() {
  useAutomation();
  return <IntroductionClient.View />;
}

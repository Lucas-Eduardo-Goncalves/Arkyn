import { IntroductionClient } from "~/modules/Introduction/client";

import { api } from "~/services/api";

export async function loader() {
  const apiResponse = await api.POST("/users", { name: "user-name" });
  return apiResponse;
}

export const meta = IntroductionClient.meta;

export default function IntroductionRoute() {
  return <IntroductionClient.View />;
}

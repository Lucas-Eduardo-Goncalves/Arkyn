import { IntroductionClient } from "~/modules/Introduction/client";
import { api } from "~/services/api";

export const meta = IntroductionClient.meta;

export async function loader() {
  const apiResponse = await api.GET("/users");
  return apiResponse;
}

export default function IntroductionRoute() {
  return <IntroductionClient.View />;
}

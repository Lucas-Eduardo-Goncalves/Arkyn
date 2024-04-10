import { UtilBadRequestClient } from "~/modules/UtilBadRequest/client";

export const meta = UtilBadRequestClient.meta;

export default function BadRequestRoute() {
  return <UtilBadRequestClient.View />;
}

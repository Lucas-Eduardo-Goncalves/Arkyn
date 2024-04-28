import { ActionFunctionArgs } from "@remix-run/node";

import { createChannel } from "./create-channel";
import { deleteChannel } from "./delete-channel";

async function action({ request }: ActionFunctionArgs) {
  const formData = await request.clone().formData();

  switch (formData.get("_action")) {
    case "create-channel":
      return await createChannel({ request });
    case "delete-channel":
      return await deleteChannel({ request });
    default:
      return null;
  }
}

export { action };

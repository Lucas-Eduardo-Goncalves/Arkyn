import { badRequest } from "@arkyn/server";
import { json } from "@remix-run/node";
import { api, authStorage } from "~/services";

type DeleteChannelProps = {
  request: Request;
};

async function deleteChannel({ request }: DeleteChannelProps) {
  const { getSession } = authStorage;

  const session = await getSession(request.headers.get("Cookie"));
  const token = await session.get("token");

  if (!token) throw new Error("Token not found");

  const formData = Object.fromEntries(await request.formData());
  const errors = { id: formData?.id ? null : "ID is required" };

  if (Object.values(errors).some(Boolean)) {
    return badRequest({ success: false, fieldErrors: errors });
  }

  const { response } = await api.DELETE(`/channels/${formData.id}`, { token });
  console.log(response);

  return json({
    success: true,
    message: "Channel created successfully",
  });
}

export { deleteChannel };

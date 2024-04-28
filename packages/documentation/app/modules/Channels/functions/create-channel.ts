import { badRequest } from "@arkyn/server";
import { json } from "@remix-run/node";
import { api, authSession } from "~/services";

type CreateChannelProps = {
  request: Request;
};

async function createChannel({ request }: CreateChannelProps) {
  const { getSession } = authSession;

  const session = await getSession(request.headers.get("Cookie"));
  const token = await session.get("token");

  if (!token) throw new Error("Token not found");

  const formData = Object.fromEntries(await request.formData());

  const errors = {
    name: formData?.name ? null : "Name is required",
  };

  if (Object.values(errors).some(Boolean)) {
    return badRequest({
      success: false,
      fieldErrors: errors,
    });
  }

  const { response } = await api.POST("/channels", formData, { token });
  console.log(response);

  return json({
    success: true,
    message: "Channel created successfully",
  });
}

export { createChannel };

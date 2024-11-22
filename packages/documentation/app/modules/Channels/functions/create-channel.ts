import {} from "@remix-run/node";
import { api, authStorage } from "~/services";

type CreateChannelProps = {
  request: Request;
};

async function createChannel({ request }: CreateChannelProps) {
  const { getSession } = authStorage;

  const session = await getSession(request.headers.get("Cookie"));
  const token = await session.get("token");

  if (!token) throw new Error("Token not found");

  const formData = Object.fromEntries(await request.formData());

  const errors = {
    name: formData?.name ? null : "Name is required",
  };

  const { response } = await api.POST("/channels", formData, { token });
  console.log(response);
}

export { createChannel };

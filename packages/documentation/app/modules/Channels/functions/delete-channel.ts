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

  const { response } = await api.DELETE(`/channels/${formData.id}`, { token });
  console.log(response);
}

export { deleteChannel };

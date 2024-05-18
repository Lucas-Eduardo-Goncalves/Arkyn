import { LoaderFunctionArgs, json } from "@remix-run/node";
import { api, authStorage } from "~/services";

type ResponseType = {
  id: string;
  name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

async function loader({ request }: LoaderFunctionArgs) {
  const session = await authStorage.getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) throw new Error("Token not found");

  const { response } = await api.GET("/channels", { token });
  return json(response.data as ResponseType[]);
}

export { loader };

import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { authSession } from "~/services";
import { UserProps } from "~/types/AuthTypes";

async function loader({ request }: LoaderFunctionArgs) {
  const session = await authSession.getSession(request.headers.get("Cookie"));
  const user = session.get("user") as UserProps;

  if (!user) {
    return redirect("/auth/sign-in?redirectURL=/v2/channels");
  }

  return json({ user });
}

export { loader };

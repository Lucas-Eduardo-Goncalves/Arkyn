import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { authStorage } from "~/services";
import { UserProps } from "~/types/AuthTypes";

async function loader({ request }: LoaderFunctionArgs) {
  const session = await authStorage.getSession(request.headers.get("Cookie"));
  const user = session.get("user") as UserProps;

  if (!user) {
    return redirect("/auth/sign-in?redirectURL=/v2/channels");
  }
}

export { loader };

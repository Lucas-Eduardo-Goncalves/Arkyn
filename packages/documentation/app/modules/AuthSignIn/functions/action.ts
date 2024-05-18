import { badRequest } from "@arkyn/server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

import { api, authStorage } from "~/services";
import { UserProps } from "~/types/AuthTypes";

type OtimisticResponse = {
  user: UserProps;
  token: string;
};

async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());

  const fieldErrors = {
    mail: formData?.mail ? null : "Mail is required",
    password: formData?.password ? null : "Password is required",
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ success: false, fieldErrors, message: "Bad request" });
  }

  const { success, response, message } = await api.POST("/auth", {
    mail: formData.mail,
    password: formData.password,
  });

  if (!success) {
    return badRequest({ success: false, fieldErrors, message });
  }

  const apiData = response.data as OtimisticResponse;
  const session = await authStorage.getSession(request.headers.get("Cookie"));

  session.set("token", apiData.token);
  session.set("user", apiData.user);

  return redirect("/v2/channels", {
    headers: { "Set-Cookie": await authStorage.commitSession(session) },
  });
}

export { action };

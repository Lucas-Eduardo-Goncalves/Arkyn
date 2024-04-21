import { ActionFunctionArgs } from "@remix-run/node";

async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());

  const fieldErrors = {
    mail: formData?.mail ? null : "Email is required",
    password: formData?.password ? null : "Password is required",
  };

  return { fieldErrors };
}

export { action };

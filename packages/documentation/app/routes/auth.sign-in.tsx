import { AuthSignInClient } from "~/modules/AuthSignIn/client";
import { AuthSignInServer } from "~/modules/AuthSignIn/server";

export const action = AuthSignInServer.action;

export const meta = AuthSignInClient.meta;

export default function AuthSignInClientRoute() {
  return <AuthSignInClient.View />;
}

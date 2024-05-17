import { ServerFormParseClient } from "~/modules/ServerFormParse/client";

export const meta = ServerFormParseClient.meta;

export default function FormParseRoute() {
  return <ServerFormParseClient.View />;
}

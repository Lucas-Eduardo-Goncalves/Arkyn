import type { InboxFlowDTO } from "@arkyn/types";

type ConfigProps = {
  status: number;
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "ERROR";
  request: string;
  response: string;
  token: string;
} & InboxFlowDTO;

async function sendInboxFlow(config: ConfigProps) {
  const { channelId, userToken, status, method, request, response, token } =
    config;

  try {
    const body = JSON.stringify({
      status,
      channelId,
      method,
      token,
      request,
      response,
    });

    await fetch(`https://logs-inbox-flow-logs.vw6wo7.easypanel.host/api/call`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export { sendInboxFlow };

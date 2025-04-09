import { InboxFlowInstance } from "../config/inboxFlowInstance";
import { httpDebug } from "../services/httpDebug";

type ConfigProps = {
  status: number;
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "ERROR";
  request: string;
  response: string;
  token: string;
};

/**
 * Sends a request to the inbox flow API with the provided configuration.
 *
 * @param config - The configuration object for the request.
 * @param config.status - The HTTP status code associated with the request.
 * @param config.method - The HTTP method used for the request. Can be "POST", "GET", "PUT", "DELETE", "PATCH", or "ERROR".
 * @param config.request - The request payload or details as a string.
 * @param config.response - The response payload or details as a string.
 * @param config.token - The token associated with the request for authentication or identification.
 *
 * @remarks
 * - This function retrieves the inbox flow configuration using `InboxFlowInstance.getInboxConfig()`.
 * - If the configuration is not available, the function will return early without performing any action.
 * - In a development environment (`NODE_ENV === "development"`), the function will also return early.
 * - The request is sent as a POST request to the inbox API URL with the provided configuration details.
 * - If an error occurs during the request, it will be logged using the `httpDebug` service.
 *
 * @example
 * ```typescript
 * const config = {
 *   status: 200,
 *   method: "POST",
 *   request: JSON.stringify({ key: "value" }),
 *   response: JSON.stringify({ success: true }),
 *   token: "example-token",
 * };
 *
 * await inboxFlowRequest(config);
 * ```
 */

async function inboxFlowRequest(config: ConfigProps) {
  const inboxFlowInstance = InboxFlowInstance.getInboxConfig();
  if (!inboxFlowInstance) return;

  const { inboxChannelId, inboxUserToken, inboxApiUrl } = inboxFlowInstance;

  const { status, method, request, response, token } = config;

  if (process.env.NODE_ENV === "development") return;

  try {
    const body = JSON.stringify({
      status,
      channelId: inboxChannelId,
      method,
      token,
      request,
      response,
    });

    await fetch(inboxApiUrl, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${inboxUserToken}`,
      },
    });
  } catch (err) {
    httpDebug("inboxFlowRequest", "Error sending inbox flow request", err);
  }
}

export { inboxFlowRequest };

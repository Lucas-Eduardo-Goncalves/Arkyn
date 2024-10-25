import type { MonitoringErrorsDTO } from "@arkyn/types";
import { sendInboxFlow } from "./sendInboxFlow";

const monitoringErrors: MonitoringErrorsDTO = async (error, config) => {
  const { inbox_flow, request } = config;

  if (inbox_flow) {
    sendInboxFlow({
      status: 400,
      channelId: inbox_flow.channelId,
      userToken: inbox_flow.userToken,
      method: "ERROR",
      request: JSON.stringify(request),
      response: JSON.stringify(error),
      token: "User token not found",
    });
  } else {
    console.error("No inbox flow found");
  }
};

export { monitoringErrors };

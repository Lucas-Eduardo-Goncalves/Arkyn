import type { PutDTO, ResponseDTO } from "@arkyn/types";
import { sendInboxFlow } from "../sendInboxFlow";

const put: PutDTO = async (url, data, config) => {
  const { headers, inbox_flow, token } = config;

  let responseConfig: Response | Object = {};

  let responseData: ResponseDTO = {
    success: false,
    status: 0,
    response: {},
    message: "",
  };

  const fetchHeaders: FetchRequestInit = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { ...headers, "Content-Type": "application/json" } || {
      "Content-Type": "application/json",
    },
  };

  await fetch(url, fetchHeaders)
    .then(async (response) => {
      await response
        .json()
        .then((data) => {
          responseConfig = response;
          responseData = {
            success: true,
            status: response.status,
            response: data,
            message: response.statusText,
          };
        })
        .catch((err) => {
          responseData = {
            success: false,
            status: 500,
            response: err,
            message: "Api Internal Error: Not a JSON response",
          };
        });
    })
    .catch((err) => {
      responseData = {
        success: false,
        status: 500,
        response: err,
        message: err?.message || "Api Internal Error",
      };
    });

  if (inbox_flow) {
    sendInboxFlow({
      channel_id: inbox_flow.channel_id,
      user_token: inbox_flow.user_token,
      method: "PUT",
      request: JSON.stringify({ ...responseConfig, ...fetchHeaders, url }),
      response: JSON.stringify(responseData.response),
      token: token || "User token not found",
    });
  }

  return responseData;
};

export { put };
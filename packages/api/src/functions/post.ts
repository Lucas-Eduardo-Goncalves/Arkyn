import type { PostDTO, ResponseDTO } from "@arkyn/types";

import { sendInboxFlow } from "../sendInboxFlow";
import { standardizeResponseMessage } from "../standardizeResponseMessage";

const post: PostDTO = async (url, data, config) => {
  const { headers, inbox_flow: inboxFlow, token } = config;

  let responseConfig: Response | Object = {};

  let responseData: ResponseDTO = {
    success: false,
    status: 0,
    response: {},
    message: "",
  };

  let fetchHeaders: FetchRequestInit = {
    method: "POST",
    body: JSON.stringify(data),
  };

  if (token) {
    fetchHeaders = {
      ...fetchHeaders,
      headers: {
        ...headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    fetchHeaders = {
      ...fetchHeaders,
      headers: { ...headers, "Content-Type": "application/json" },
    };
  }

  await fetch(url, fetchHeaders)
    .then(async (response) => {
      await response
        .json()
        .then((data) => {
          responseConfig = response;
          responseData = {
            success: response.ok,
            status: response.status,
            response: data,
            message: standardizeResponseMessage(data, response),
          };
        })
        .catch((err) => {
          responseData = {
            success: response.ok,
            status: response.status,
            response: null,
            message: response.statusText,
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

  if (inboxFlow) {
    sendInboxFlow({
      status: responseData.status,
      channelId: inboxFlow.channelId,
      userToken: inboxFlow.userToken,
      method: "POST",
      request: JSON.stringify({ ...responseConfig, ...fetchHeaders, url }),
      response: JSON.stringify(responseData.response),
      token: token || "User token not found",
    });
  }

  return responseData;
};

export { post };

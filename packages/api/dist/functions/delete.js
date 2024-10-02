import { sendInboxFlow } from "../sendInboxFlow";
import { standardizeResponseMessage } from "../standardizeResponseMessage";
const deleteF = async (url, config) => {
    const { headers, inbox_flow: inboxFlow, token } = config;
    let responseConfig = {};
    let responseData = {
        success: false,
        status: 0,
        response: {},
        message: "",
    };
    let fetchHeaders = { method: "DELETE" };
    if (token) {
        fetchHeaders = {
            ...fetchHeaders,
            headers: { ...headers, Authorization: `Bearer ${token}` },
        };
    }
    else {
        fetchHeaders = { ...fetchHeaders, headers };
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
            channelId: inboxFlow.channelId,
            userToken: inboxFlow.userToken,
            method: "DELETE",
            request: JSON.stringify({ ...responseConfig, ...fetchHeaders, url }),
            response: JSON.stringify(responseData.response),
            token: token || "User token not found",
        });
    }
    return responseData;
};
export { deleteF };

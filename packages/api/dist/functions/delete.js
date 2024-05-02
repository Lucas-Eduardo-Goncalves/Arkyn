import { sendInboxFlow } from "../sendInboxFlow";
const deleteF = async (url, config) => {
    const { headers, inbox_flow, token } = config;
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
            method: "DELETE",
            request: JSON.stringify({ ...responseConfig, ...fetchHeaders, url }),
            response: JSON.stringify(responseData.response),
            token: token || "User token not found",
        });
    }
    return responseData;
};
export { deleteF };

import { sendInboxFlow } from "./sendInboxFlow";
const monitoringErrors = async (error, config) => {
    const { inbox_flow, request } = config;
    if (inbox_flow) {
        sendInboxFlow({
            channel_id: inbox_flow.channel_id,
            user_token: inbox_flow.user_token,
            method: "REMIX-ERROR",
            request: JSON.stringify(request),
            response: JSON.stringify(error),
            token: "User token not found",
        });
    }
    else {
        console.error("No inbox flow found");
    }
};
export { monitoringErrors };

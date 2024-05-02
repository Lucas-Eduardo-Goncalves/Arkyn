async function sendInboxFlow(config) {
    const { channel_id, user_token, method, request, response, token } = config;
    const body = JSON.stringify({
        channel_id,
        method,
        token,
        request,
        response,
    });
    await fetch(`https://inbox-flow-api.fly.dev/calls`, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_token}`,
        },
    });
}
export { sendInboxFlow };

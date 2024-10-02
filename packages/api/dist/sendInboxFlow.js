async function sendInboxFlow(config) {
    const { channelId, userToken, method, request, response, token } = config;
    try {
        const body = JSON.stringify({
            channelId,
            method,
            token,
            request,
            response,
        });
        await fetch(`https://inbox-flow-api.fly.dev/api/call`, {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
        });
    }
    catch (err) {
        console.error(err);
    }
}
export { sendInboxFlow };

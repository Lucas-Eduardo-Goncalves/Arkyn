async function sendInboxFlow(config) {
    const { channelId, userToken, status, method, request, response, token } = config;
    if (process.env.NODE_ENV === "development")
        return;
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
    }
    catch (err) {
        console.error(err);
    }
}
export { sendInboxFlow };

const monitoringErrors = async (error, config) => {
    const { inbox_flow, request, params } = config;
    if (process.env.NODE_ENV === "development")
        return;
    const sendData = {
        channelId: inbox_flow.channelId,
        method: request.method,
        message: JSON.stringify(error),
        params: JSON.stringify(params),
        request: JSON.stringify({
            method: request.method,
            url: request.url,
            headers: [...request.headers.entries()],
            mode: request.mode,
            credentials: request.credentials,
            cache: request.cache,
            redirect: request.redirect,
            integrity: request.integrity,
            keepalive: request.keepalive,
        }),
    };
    await fetch("https://logs-inbox-flow-logs.vw6wo7.easypanel.host/api/error-log", {
        body: JSON.stringify(sendData),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${inbox_flow.userToken}`,
        },
    });
};
export { monitoringErrors };

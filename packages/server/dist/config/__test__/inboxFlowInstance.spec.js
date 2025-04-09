import { describe, it, expect } from "vitest";
import { InboxFlowInstance } from "../inboxFlowInstance";
describe("InboxFlowInstance", () => {
    it("should set the inbox configuration if not already set", () => {
        const inboxConfig = {
            inboxChannelId: "channel-123",
            inboxUserToken: "user-token-abc",
            inboxApiUrl: "https://custom-inbox-api.com",
        };
        InboxFlowInstance.setInboxConfig(inboxConfig);
        const config = InboxFlowInstance.getInboxConfig();
        expect(config).toEqual(inboxConfig);
    });
    it("should not overwrite the inbox configuration if already set", () => {
        const initialConfig = {
            inboxChannelId: "channel-123",
            inboxUserToken: "user-token-abc",
            inboxApiUrl: "https://custom-inbox-api.com",
        };
        const newConfig = {
            inboxChannelId: "channel-456",
            inboxUserToken: "user-token-def",
            inboxApiUrl: "https://another-inbox-api.com",
        };
        InboxFlowInstance.setInboxConfig(initialConfig);
        InboxFlowInstance.setInboxConfig(newConfig);
        const config = InboxFlowInstance.getInboxConfig();
        expect(config).toEqual(initialConfig);
    });
    it("should return undefined if no configuration is set", () => {
        InboxFlowInstance.resetInboxConfig();
        const config = InboxFlowInstance.getInboxConfig();
        expect(config).toBeUndefined();
    });
    it("should use the default API URL if none is provided", () => {
        const inboxConfig = {
            inboxChannelId: "channel-123",
            inboxUserToken: "user-token-abc",
        };
        const defaultInboxURL = `https://logs-inbox-flow-logs.vw6wo7.easypanel.host/api/call`;
        InboxFlowInstance.setInboxConfig(inboxConfig);
        const config = InboxFlowInstance.getInboxConfig();
        expect(config).toEqual({
            ...inboxConfig,
            inboxApiUrl: defaultInboxURL,
        });
    });
});

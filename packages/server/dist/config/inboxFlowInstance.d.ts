type InboxConfigProps = {
    inboxChannelId: string;
    inboxUserToken: string;
    inboxApiUrl: string;
};
type SetInboxConfigProps = {
    inboxChannelId: string;
    inboxUserToken: string;
    inboxApiUrl?: string;
};
/**
 * The `InboxFlowInstance` class manages the configuration for the inbox flow.
 * It allows you to set and retrieve the inbox configuration, including the channel ID,
 * user token, and API URL.
 */
declare class InboxFlowInstance {
    private static inboxConfig?;
    /**
     * Sets the configuration for the inbox. This method initializes the inbox configuration
     * with the provided `inboxConfig` values. If the configuration has already been set,
     * the method will return early without making any changes.
     *
     * @param inboxConfig - An object containing the inbox configuration properties.
     * @param inboxConfig.inboxChannelId - The key used to identify the inbox.
     * @param inboxConfig.inboxUserToken - The user token for authenticating with the inbox.
     * @param inboxConfig.inboxApiUrl - (Optional) The API URL for the inbox. If not provided,
     * a default URL will be used.
     */
    static setInboxConfig(inboxConfig: SetInboxConfigProps): void;
    /**
     * Retrieves the current inbox configuration for the InboxFlowInstance.
     *
     * @returns {InboxConfigProps | undefined} The current inbox configuration if set,
     * or `undefined` if no configuration has been initialized.
     */
    static getInboxConfig(): InboxConfigProps | undefined;
    /**
     * Resets the inbox configuration to `undefined`.
     * This method can be used to clear the current configuration.
     */
    static resetInboxConfig(): void;
}
export { InboxFlowInstance };
//# sourceMappingURL=inboxFlowInstance.d.ts.map
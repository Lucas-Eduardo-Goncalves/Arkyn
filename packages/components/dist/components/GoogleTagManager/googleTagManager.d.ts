type InitializeDataLayerProps = {
    dataLayerName: string;
    dataLayer: Record<string, string>;
};
type InitializeProps = {
    gtmId: string;
    events: Record<string, string>;
    dataLayer: Record<string, string>;
    dataLayerName: string;
    auth: string;
    preview: string;
};
declare class GoogleTagManager {
    private initializeDataScript;
    private initializeGTMElements;
    initializeDataLayer(props: InitializeDataLayerProps): any;
    initialize(props: InitializeProps): void;
}
export { GoogleTagManager };
//# sourceMappingURL=googleTagManager.d.ts.map
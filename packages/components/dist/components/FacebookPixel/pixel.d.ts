type Options = {
    autoConfig?: boolean;
    debug?: boolean;
};
declare class FacebookPixel {
    pixelId: string;
    autoConfig: boolean;
    initialized: boolean;
    constructor(pixelId: string, options?: Options);
    private loadFacebookPixel;
    init(advancedMatching?: object): void;
    pageView(): void;
    track(title: string, data?: object): void;
    trackSingle(pixel: string, title: string, data?: object): void;
    trackCustom(event: string, data?: object): void;
    trackSingleCustom(pixel: string, event: string, data?: object): void;
    grantConsent(): void;
    revokeConsent(): void;
}
export { FacebookPixel };
//# sourceMappingURL=pixel.d.ts.map
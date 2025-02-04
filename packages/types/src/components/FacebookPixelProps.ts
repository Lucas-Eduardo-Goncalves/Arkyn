type FacebookPixelProps = {
  pixelId: string;
  options?: {
    autoConfig?: boolean;
    debug?: boolean;
  };
  pageView?: boolean;
  grantConsent?: boolean;
  revokeConsent?: boolean;
  track?: [string, any?];
  trackCustom?: [string, any?];
  trackSingle?: [string, any?];
  trackSingleCustom?: [string, any?];
};

export type { FacebookPixelProps };

type Fbq = {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue: any[];
  push: (...args: any[]) => void;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export { Fbq };

type HttpResponse = {
    status: number;
    cause: Error["cause"] | null;
    success: false;
    name: string;
    message: string;
};
type HttpDataResponse = {
    success: boolean;
    status: number;
    fieldErrors?: {
        [x: string]: string;
    };
    fields?: {
        [x: string]: string;
    };
    data?: any;
    name: string;
    message?: string;
};
export type { HttpResponse, HttpDataResponse };
//# sourceMappingURL=httpResponse.d.ts.map
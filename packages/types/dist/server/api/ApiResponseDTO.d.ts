type ApiSuccessResponse<T = any> = {
    success: true;
    status: number;
    message: string;
    response: T;
    cause: null;
};
type ApiFailedResponse = {
    success: false;
    status: number;
    message: string;
    response: any;
    cause: string | Error | null;
};
type ApiResponseDTO<T = any> = ApiSuccessResponse<T> | ApiFailedResponse;
export type { ApiResponseDTO };
//# sourceMappingURL=ApiResponseDTO.d.ts.map
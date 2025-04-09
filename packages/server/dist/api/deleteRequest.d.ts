import type { ApiResponseDTO } from "@arkyn/types";
/**
 * Sends a DELETE request to the specified URL with optional headers and body.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to send the DELETE request to.
 * @param {HeadersInit} [headers={}] - Optional headers to include in the request.
 * @param {any} [body] - Optional body to include in the request.
 * @returns {Promise<ApiResponseDTO<T>>} A promise that resolves to the API response.
 */
declare function deleteRequest<T = any>(url: string, headers?: HeadersInit, body?: any): Promise<ApiResponseDTO<T>>;
export { deleteRequest };
//# sourceMappingURL=deleteRequest.d.ts.map
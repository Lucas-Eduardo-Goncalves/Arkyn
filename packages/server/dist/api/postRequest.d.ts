import type { ApiResponseDTO } from "@arkyn/types";
/**
 * Sends a PATCH request to the specified URL with optional headers and body.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to send the PATCH request to.
 * @param {HeadersInit} [headers={}] - Optional headers to include in the request.
 * @param {any} body - The body to include in the request.
 * @returns {Promise<ApiResponseDTO<T>>} A promise that resolves to the API response.
 */
declare function postRequest<T = any>(url: string, headers: HeadersInit | undefined, body: any): Promise<ApiResponseDTO<T>>;
export { postRequest };
//# sourceMappingURL=postRequest.d.ts.map
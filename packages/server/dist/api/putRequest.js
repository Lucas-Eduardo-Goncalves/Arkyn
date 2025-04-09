import { makeRequest } from "./makeRequest";
/**
 * Sends a PATCH request to the specified URL with optional headers and body.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to send the PATCH request to.
 * @param {HeadersInit} [headers={}] - Optional headers to include in the request.
 * @param {any} body - The body to include in the request.
 * @returns {Promise<ApiResponseDTO<T>>} A promise that resolves to the API response.
 */
async function putRequest(url, headers = {}, body) {
    return makeRequest("PUT", url, headers, body);
}
export { putRequest };

import { makeRequest } from "./makeRequest";
/**
 * Sends a GET request to the specified URL with optional headers.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to send the GET request to.
 * @param {HeadersInit} [headers={}] - Optional headers to include in the request.
 * @returns {Promise<ApiResponseDTO<T>>} A promise that resolves to the API response.
 */
async function getRequest(url, headers = {}) {
    return makeRequest("GET", url, headers);
}
export { getRequest };

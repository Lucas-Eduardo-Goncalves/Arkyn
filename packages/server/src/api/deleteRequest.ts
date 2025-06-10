import type { ApiResponseDTO } from "../types/ApiResponseDTO";
import { makeRequest } from "./makeRequest";

/**
 * Sends a DELETE request to the specified URL with optional headers and body.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to send the DELETE request to.
 * @param {HeadersInit} [headers={}] - Optional headers to include in the request.
 * @param {any} [body] - Optional body to include in the request.
 * @returns {Promise<ApiResponseDTO<T>>} A promise that resolves to the API response.
 */

async function deleteRequest<T = any>(
  url: string,
  headers: HeadersInit = {},
  body?: any
): Promise<ApiResponseDTO<T>> {
  return makeRequest("DELETE", url, headers, body);
}

export { deleteRequest };

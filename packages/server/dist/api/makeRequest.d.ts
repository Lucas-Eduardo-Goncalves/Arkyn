import type { ApiResponseDTO } from "@arkyn/types";
/**
 * Makes an HTTP request using the Fetch API and returns a standardized response.
 *
 * @template T - The expected type of the response data.
 * @param method - The HTTP method to use for the request. Supported methods are:
 *   - "POST": Create a new resource.
 *   - "PUT": Update an existing resource.
 *   - "DELETE": Remove a resource.
 *   - "PATCH": Partially update a resource.
 *   - "GET": Retrieve a resource.
 * @param url - The URL to which the request is sent.
 * @param headers - Optional headers to include in the request. Defaults to an empty object.
 * @param body - Optional body to include in the request. Should be serializable to JSON.
 * @returns A promise that resolves to an `ApiResponseDTO<T>` object containing:
 *   - `success`: A boolean indicating whether the request was successful.
 *   - `status`: The HTTP status code of the response.
 *   - `message`: A message describing the result of the request.
 *   - `response`: The parsed JSON response data, or `null` if parsing fails.
 *   - `cause`: Additional error information, if applicable.
 *
 * @example
 * ```typescript
 * import { makeRequest } from "./makeRequest";
 *
 * async function fetchData() {
 *   const response = await makeRequest("GET", "https://api.example.com/data");
 *   if (response.success) {
 *     console.log("Data:", response.response);
 *   } else {
 *     console.error("Error:", response.message);
 *   }
 * }
 * ```
 */
declare function makeRequest<T = any>(method: "POST" | "PUT" | "DELETE" | "PATCH" | "GET", url: string, headers?: HeadersInit, body?: any): Promise<ApiResponseDTO<T>>;
export { makeRequest };
//# sourceMappingURL=makeRequest.d.ts.map
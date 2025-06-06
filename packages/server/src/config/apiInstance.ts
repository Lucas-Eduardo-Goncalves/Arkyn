import { deleteRequest } from "../api/deleteRequest";
import { getRequest } from "../api/getRequest";
import { patchRequest } from "../api/patchRequest";
import { postRequest } from "../api/postRequest";
import { putRequest } from "../api/putRequest";

type ApiInstanceContructorProps = {
  baseUrl: string;
  baseHeaders?: HeadersInit;
  baseToken?: string | null;
};

type ApiRequestDataWithoutBodyProps = {
  headers?: HeadersInit;
  token?: string;
};

type ApiRequestDataWithBodyProps = {
  body?: any;
  headers?: HeadersInit;
  token?: string;
};

/**
 * Class representing an API instance to handle HTTP requests with base configurations.
 */

class ApiInstance {
  private baseUrl: string;
  private baseHeaders?: HeadersInit;
  private baseToken?: string;

  /**
   * Creates an instance of ApiInstance.
   * @param props - The configuration properties for the API instance.
   * @param props.baseUrl - The base URL for the API.
   * @param props.baseHeaders - Optional base headers to include in all requests.
   * @param props.baseToken - Optional base token for authorization.
   */

  constructor(props: ApiInstanceContructorProps) {
    this.baseUrl = props.baseUrl;
    this.baseHeaders = props.baseHeaders || undefined;
    this.baseToken = props.baseToken || undefined;
  }

  /**
   * Generates the full URL by appending the route to the base URL.
   * @param route - The route to append to the base URL.
   * @returns The full URL as a string.
   */

  private generateURL(route: string) {
    return this.baseUrl + route;
  }

  /**
   * Generates the headers for a request by merging base headers, provided headers, and tokens.
   * @param initHeaders - Initial headers to include in the request.
   * @param token - Optional token to override the base token.
   * @returns The merged headers as a HeadersInit object.
   */

  private generateHeaders(
    initHeaders: HeadersInit,
    token?: string
  ): HeadersInit {
    let headers: HeadersInit = {};
    if (this.baseToken) headers = { Authorization: `Bearer ${this.baseToken}` };
    if (this.baseHeaders) headers = { ...headers, ...this.baseHeaders };

    if (initHeaders) headers = { ...headers, ...initHeaders };
    if (token) headers = { ...headers, Authorization: `Bearer ${token}` };

    return headers;
  }

  /**
   * Sends a GET request to the specified route.
   * @param route - The API route to send the GET request to.
   * @param data - The request data, including optional headers and token.
   * @returns The API response data.
   */

  async GET(route: string, data?: ApiRequestDataWithoutBodyProps) {
    const url = this.generateURL(route);
    const headers = this.generateHeaders(data?.headers || {}, data?.token);
    return await getRequest(url, headers);
  }

  /**
   * Sends a POST request to the specified route.
   * @param route - The API route to send the POST request to.
   * @param data - The request data, including body, optional headers, and token.
   * @returns The API response data.
   */

  async POST(route: string, data?: ApiRequestDataWithBodyProps) {
    const url = this.generateURL(route);
    const headers = this.generateHeaders(data?.headers || {}, data?.token);
    const body = data?.body;
    return await postRequest(url, headers, body);
  }

  /**
   * Sends a PUT request to the specified route.
   * @param route - The API route to send the PUT request to.
   * @param data - The request data, including body, optional headers, and token.
   * @returns The API response data.
   */

  async PUT(route: string, data?: ApiRequestDataWithBodyProps) {
    const url = this.generateURL(route);
    const headers = this.generateHeaders(data?.headers || {}, data?.token);
    const body = data?.body;
    return await putRequest(url, headers, body);
  }

  /**
   * Sends a PATCH request to the specified route.
   * @param route - The API route to send the PATCH request to.
   * @param data - The request data, including body, optional headers, and token.
   * @returns The API response data.
   */

  async PATCH(route: string, data?: ApiRequestDataWithBodyProps) {
    const url = this.generateURL(route);
    const headers = this.generateHeaders(data?.headers || {}, data?.token);
    const body = data?.body;
    return await patchRequest(url, headers, body);
  }

  /**
   * Sends a DELETE request to the specified route.
   * @param route - The API route to send the DELETE request to.
   * @param data - The request data, including body, optional headers, and token.
   * @returns The API response data.
   */

  async DELETE(route: string, data?: ApiRequestDataWithBodyProps) {
    const url = this.generateURL(route);
    const headers = this.generateHeaders(data?.headers || {}, data?.token);
    const body = data?.body;
    return await deleteRequest(url, headers, body);
  }
}

export { ApiInstance };

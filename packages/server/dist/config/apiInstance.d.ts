type ApiAinstanceContructorProps = {
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
declare class ApiInstance {
    private baseUrl;
    private baseHeaders?;
    private baseToken?;
    /**
     * Creates an instance of ApiInstance.
     * @param props - The configuration properties for the API instance.
     * @param props.baseUrl - The base URL for the API.
     * @param props.baseHeaders - Optional base headers to include in all requests.
     * @param props.baseToken - Optional base token for authorization.
     */
    constructor(props: ApiAinstanceContructorProps);
    /**
     * Generates the full URL by appending the route to the base URL.
     * @param route - The route to append to the base URL.
     * @returns The full URL as a string.
     */
    private generateURL;
    /**
     * Generates the headers for a request by merging base headers, provided headers, and tokens.
     * @param initHeaders - Initial headers to include in the request.
     * @param token - Optional token to override the base token.
     * @returns The merged headers as a HeadersInit object.
     */
    private generateHeaders;
    /**
     * Sends a GET request to the specified route.
     * @param route - The API route to send the GET request to.
     * @param data - The request data, including optional headers and token.
     * @returns The API response data.
     */
    GET(route: string, data?: ApiRequestDataWithoutBodyProps): Promise<import("@arkyn/types").ApiResponseDTO<any>>;
    /**
     * Sends a POST request to the specified route.
     * @param route - The API route to send the POST request to.
     * @param data - The request data, including body, optional headers, and token.
     * @returns The API response data.
     */
    POST(route: string, data?: ApiRequestDataWithBodyProps): Promise<import("@arkyn/types").ApiResponseDTO<any>>;
    /**
     * Sends a PUT request to the specified route.
     * @param route - The API route to send the PUT request to.
     * @param data - The request data, including body, optional headers, and token.
     * @returns The API response data.
     */
    PUT(route: string, data?: ApiRequestDataWithBodyProps): Promise<import("@arkyn/types").ApiResponseDTO<any>>;
    /**
     * Sends a PATCH request to the specified route.
     * @param route - The API route to send the PATCH request to.
     * @param data - The request data, including body, optional headers, and token.
     * @returns The API response data.
     */
    PATCH(route: string, data?: ApiRequestDataWithBodyProps): Promise<import("@arkyn/types").ApiResponseDTO<any>>;
    /**
     * Sends a DELETE request to the specified route.
     * @param route - The API route to send the DELETE request to.
     * @param data - The request data, including body, optional headers, and token.
     * @returns The API response data.
     */
    DELETE(route: string, data?: ApiRequestDataWithBodyProps): Promise<import("@arkyn/types").ApiResponseDTO<any>>;
}
export { ApiInstance };
//# sourceMappingURL=apiInstance.d.ts.map
type InputProps = {
  status: number;
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  requestHeaders: HeadersInit;
  responseHeaders: HeadersInit;
  requestBody: any;
  elapsedTime: number;
  responseBody: any;
  queryParams: URLSearchParams;
};

type OutputProps = {
  rawUrl: string;
  status: number;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  token: string | null;
  elapsedTime: number;
  requestHeaders: Record<string, string>;
  requestBody: Record<string, string>;
  queryParams: Record<string, string>;
  responseHeaders: Record<string, string>;
  responseBody: any;
};

class ArkynLogRequestMapper {
  private static mapHeaders(headers: HeadersInit): Record<string, string> {
    if (headers instanceof Headers) {
      return Object.fromEntries(headers.entries());
    } else if (typeof headers === "object") {
      return Object.entries(headers).reduce((acc, [key, value]) => {
        if (typeof value === "string") {
          acc[key] = value;
        } else if (Array.isArray(value)) {
          acc[key] = value.join(", ");
        } else {
          acc[key] = JSON.stringify(value);
        }
        return acc;
      }, {} as Record<string, string>);
    }
    return {};
  }

  private static mapQueryParams(
    queryParams: URLSearchParams
  ): Record<string, string> {
    const params: Record<string, string> = {};

    queryParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }

  static handle(props: InputProps): OutputProps {
    return {
      rawUrl: props.url,
      status: props.status,
      method: props.method,
      token: null,
      elapsedTime: props.elapsedTime,
      requestHeaders: this.mapHeaders(props.requestHeaders),
      requestBody: props.requestBody || null,
      queryParams: this.mapQueryParams(props.queryParams),
      responseHeaders: this.mapHeaders(props.responseHeaders),
      responseBody: props.responseBody || null,
    };
  }
}

export { ArkynLogRequestMapper };

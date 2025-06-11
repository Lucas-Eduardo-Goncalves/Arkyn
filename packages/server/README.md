The `@arkyn/server` package provides utilities and services to streamline backend application development. It includes API configurations, HTTP error handlers, and various services for file manipulation.

---

## Installation

Install the package using npm:

```bash
npm install @arkyn/server
```

---

## Features

### Settings

- **`ApiInstance`**  
  Pre-configured instance for API calls.

- **`ArkynLogInstance`**  
  Pre-configured instance for integration with Inbox Flow.

---

### HTTP Responses - Errors

- **`BadGateway(message: string): Error`**  
  Represents an HTTP 502 error.

- **`BadRequest(message: string): Error`**  
  Represents an HTTP 400 error.

- **`Conflict(message: string): Error`**  
  Represents an HTTP 409 error.

- **`Forbidden(message: string): Error`**  
  Represents an HTTP 403 error.

- **`NotFound(message: string): Error`**  
  Represents an HTTP 404 error.

- **`NotImplemented(message: string): Error`**  
  Represents an HTTP 501 error.

- **`ServerError(message: string): Error`**  
  Represents an HTTP 500 error.

- **`Unauthorized(message: string): Error`**  
  Represents an HTTP 401 error.

- **`UnprocessableEntity(message: string): Error`**  
  Represents an HTTP 422 error.

---

### HTTP Responses - Success

- **`Created(data: any): Response`**  
  Represents an HTTP 201 response.

- **`Found(data: any): Response`**  
  Represents an HTTP 302 response.

- **`NoContent(): Response`**  
  Represents an HTTP 204 response.

- **`Success(data: any): Response`**  
  Represents an HTTP 200 response.

- **`Updated(data: any): Response`**  
  Represents an HTTP 200 response for updates.

---

### Services

- **`decodeErrorMessageFromRequest(request: Request): string`**  
  Decodes error messages from a request.

- **`decodeRequestBody(request: Request): any`**  
  Decodes the body of a request.

- **`errorHandler(error: Error): Response`**  
  Handles errors and returns an appropriate response.

- **`formParse(request: Request): FormData`**  
  Parses form data.

- **`getCaller(): string`**  
  Returns the name of the function that invoked the method.

- **`getScopedParams(request: Request): URLSearchParams`**  
  Retrieves scoped parameters from a request.

- **`httpDebug(request: Request): void`**  
  Displays debug information for an HTTP request.

- **`SchemaValidator(schema: any, data: any): boolean`**  
  Validates data against a schema.

- **`sendFileToS3(file: File, config: AwsConfig): Promise<{ url: string }>`**  
  Uploads a file to AWS S3.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## License

This project is licensed under the Apache 2.0 License. See the `LICENSE` file for more details.

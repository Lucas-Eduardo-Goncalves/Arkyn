/**
 * Logs debug information to the console when in development mode or when the
 * `SHOW_ERRORS_IN_CONSOLE` environment variable is set to "true".
 *
 * This function provides detailed information about the caller function,
 * its location, and the provided body and cause, if any.
 *
 * @param name - A string representing the name or context of the debug log.
 * @param body - The main content or data to be logged.
 * @param cause - (Optional) Additional information or error cause to be logged.
 *
 * @remarks
 * The debug logs are only displayed when the application is running in
 * development mode (`NODE_ENV === "development"`) or when the
 * `SHOW_ERRORS_IN_CONSOLE` environment variable is explicitly set to "true".
 *
 * The logs include:
 * - The name of the debug context.
 * - The caller function name and its location.
 * - The provided body content.
 * - The optional cause, if provided.
 *
 * @example
 * ```typescript
 * httpDebug("FetchUserData", { userId: 123 });
 * ```
 *
 * @example
 * ```typescript
 * httpDebug("FetchUserDataError", { userId: 123 }, new Error("User not found"));
 * ```
 */
declare function httpDebug(name: string, body: any, cause?: any): void;
export { httpDebug };
//# sourceMappingURL=httpDebug.d.ts.map
import { getCaller } from "../services/getCaller";

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

function httpDebug(name: string, body: any, cause?: any) {
  const isDebugMode =
    process.env.NODE_ENV === "development" ||
    process.env?.SHOW_ERRORS_IN_CONSOLE === "true";

  if (isDebugMode) {
    const reset = "\x1b[0m";
    const cyan = "\x1b[36m";

    const debugName = `${cyan}[ARKYN-DEBUG]${reset}`;
    const { callerInfo, functionName } = getCaller();

    let consoleData = `${debugName} ${name} initialized\n`;
    consoleData += `${debugName} Caller Function: ${functionName}\n`;
    consoleData += `${debugName} Caller Location: ${callerInfo}\n`;
    consoleData += `${debugName} Body: ${JSON.stringify(body, null, 2)}\n`;

    if (cause) {
      consoleData += `${debugName} Cause: ${JSON.stringify(cause, null, 2)}\n`;
    }

    console.log(consoleData);
  }
}

export { httpDebug };

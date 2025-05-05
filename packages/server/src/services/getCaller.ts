import path from "path";

/**
 * Retrieves information about the caller of the current function.
 *
 * This function analyzes the stack trace to determine the file path and function name
 * of the caller. It excludes stack trace entries related to the `@arkyn/server` package
 * and attempts to resolve the file path relative to the project root directory.
 *
 * @returns An object containing:
 * - `functionName`: The name of the function that called the current function, or "Unknown function" if it cannot be determined.
 * - `callerInfo`: The file path of the caller relative to the project root, or "Unknown caller" if it cannot be determined.
 */

function getCaller() {
  const projectRoot = process.cwd();

  const err = new Error();
  const stack = err.stack || "";

  const stackLines = stack.split("\n").map((line) => line.trim());

  const callerLine = stackLines[4] || "";

  let functionName = "unknown";
  let callerInfo = "unknown location";

  const functionMatch = callerLine.match(/at\s+([^\s]+)\s+\((.*)\)/);
  if (functionMatch) {
    functionName = functionMatch[1];
    callerInfo = functionMatch[2];
  } else {
    const locationMatch = callerLine.match(/at\s+(.*)/);
    if (locationMatch) {
      callerInfo = locationMatch[1];
      const pathParts = callerInfo.split("/");
      const lastPart = pathParts[pathParts.length - 1] || "";
      const fileParts = lastPart.split(":");
      functionName = fileParts[0] || "unknown";
    }
  }

  callerInfo = path.relative(projectRoot, callerInfo);

  return { functionName, callerInfo };
}

export { getCaller };

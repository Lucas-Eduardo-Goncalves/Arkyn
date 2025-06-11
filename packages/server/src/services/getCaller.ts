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

  // The first line is the error message
  // The second line is this function (getCaller)
  // The third line should be the direct caller
  // We start from 2 because indexes are zero-based
  let callerIndex = 2;

  // Ignore internal or infrastructure lines if necessary
  while (
    callerIndex < stackLines.length &&
    (stackLines[callerIndex].includes("node:internal") ||
      stackLines[callerIndex].includes("/node_modules/"))
  ) {
    callerIndex++;
  }

  const callerLine = stackLines[callerIndex] || "";

  let functionName = "Unknown function";
  let callerInfo = "Unknown caller";

  // Default for named functions: "at functionName (file:line:column)"
  const namedFunctionMatch = callerLine.match(/at\s+([^(\s]+)\s+\(([^)]+)\)/);
  if (namedFunctionMatch) {
    functionName = namedFunctionMatch[1];
    callerInfo = namedFunctionMatch[2];
  }
  // Default for anonymous functions or methods: "at file:line:column"
  else {
    const anonymousFunctionMatch = callerLine.match(/at\s+(.+)/);
    if (anonymousFunctionMatch) {
      callerInfo = anonymousFunctionMatch[1];

      // Tenta extrair nome da função de padrões como Object.method ou Class.method
      const objectMethodMatch = callerInfo.match(/at\s+([^(\s]+)\s+/);
      if (objectMethodMatch && objectMethodMatch[1] !== "new") {
        functionName = objectMethodMatch[1];
      }
    }
  }

  // Handles file paths
  if (callerInfo.includes("(")) {
    callerInfo = callerInfo.substring(
      callerInfo.indexOf("(") + 1,
      callerInfo.lastIndexOf(")")
    );
  }

  // Remove the line:column part of the file path
  callerInfo = callerInfo.split(":").slice(0, -2).join(":");

  // Make the path relative to the project
  try {
    callerInfo = path.relative(projectRoot, callerInfo);
  } catch (e) {
    // If it fails to relativize, use the original path
  }

  return { functionName, callerInfo };
}

export { getCaller };

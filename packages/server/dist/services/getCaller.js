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
    const error = new Error();
    const stackLines = error.stack?.split("\n").map((line) => line.trim()) || [];
    let callerInfo = "Unknown caller";
    let functionName = "Unknown function";
    const relevantLines = stackLines.filter((line) => !line.includes("@arkyn/server"));
    let foundGetCaller = false;
    for (const line of relevantLines) {
        if (!foundGetCaller) {
            if (line.includes("getCaller")) {
                foundGetCaller = true;
            }
            continue;
        }
        const match = line.match(/at (.+?) \((.+?)\)/) || line.match(/at (.+)/);
        if (match) {
            const rawFuncName = match[1]?.split(" ")[0] || "";
            functionName =
                rawFuncName && !rawFuncName.includes("/")
                    ? rawFuncName
                    : "Unknown function";
            let fullPath = match[2] || match[1];
            if (fullPath.startsWith(projectRoot)) {
                fullPath = path.relative(projectRoot, fullPath);
            }
            callerInfo = fullPath;
            break;
        }
    }
    return { functionName, callerInfo };
}
export { getCaller };

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
declare function getCaller(): {
    functionName: string;
    callerInfo: string;
};
export { getCaller };
//# sourceMappingURL=getCaller.d.ts.map
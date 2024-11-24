function getScopedParams(request, scope = "") {
    const url = new URL(request.url);
    if (scope === "")
        return url.searchParams;
    const scopedSearchParams = Array.from(url.searchParams.entries())
        .filter(([key]) => key.startsWith(`${scope}:`))
        .map(([key, value]) => [key.replace(`${scope}:`, ""), value]);
    return new URLSearchParams(scopedSearchParams);
}
export { getScopedParams };

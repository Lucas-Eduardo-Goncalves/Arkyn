import { useLocation } from "@remix-run/react";
function useScopedParams(scope = "") {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const prefix = scope ? `${scope}:` : "";
    const updateSearchParams = (params) => {
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined) {
                searchParams.delete(`${prefix}${key}`);
            }
            else {
                searchParams.set(`${prefix}${key}`, String(value));
            }
        });
    };
    return {
        getParam: (key) => searchParams.get(`${prefix}${key}`),
        getScopedSearch: (params) => {
            updateSearchParams(params);
            let search = searchParams.toString();
            if (search)
                search = "?" + search;
            return search;
        },
    };
}
export { useScopedParams };

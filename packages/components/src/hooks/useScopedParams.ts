import { useLocation } from "react-router";

type ParamsType = Record<string, string | number | boolean | undefined>;

function useScopedParams(scope: string = "") {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prefix = scope ? `${scope}:` : "";

  const updateSearchParams = (params: ParamsType) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) {
        searchParams.delete(`${prefix}${key}`);
      } else {
        searchParams.set(`${prefix}${key}`, String(value));
      }
    });
  };

  return {
    getParam: (key: string) => searchParams.get(`${prefix}${key}`),
    getScopedSearch: (params: ParamsType) => {
      updateSearchParams(params);
      let search = searchParams.toString();
      if (search) search = "?" + search;
      return search;
    },
  };
}

export { useScopedParams };

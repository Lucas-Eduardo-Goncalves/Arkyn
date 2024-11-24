type ParamsType = Record<string, string | number | boolean | undefined>;
declare function useScopedParams(scope?: string): {
    getParam: (key: string) => string;
    getScopedSearch: (params: ParamsType) => string;
};
export { useScopedParams };
//# sourceMappingURL=useScopedParams.d.ts.map
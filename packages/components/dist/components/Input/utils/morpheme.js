import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
function morpheme(data, iconSize, type) {
    if (!data)
        return _jsx(_Fragment, {});
    if (typeof data === "string")
        return _jsx("p", { className: type, children: data });
    const Data = data;
    return (_jsx("p", { className: type, children: _jsx(Data, { color: "var(--secondary-600)", size: iconSize, strokeWidth: 2.5 }) }));
}
export { morpheme };

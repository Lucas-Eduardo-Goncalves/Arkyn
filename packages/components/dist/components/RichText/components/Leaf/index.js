import { jsx as _jsx } from "react/jsx-runtime";
function Leaf({ attributes, children, leaf }) {
    if (leaf.bold)
        children = _jsx("strong", { children: children });
    if (leaf.code)
        children = _jsx("code", { children: children });
    if (leaf.italic)
        children = _jsx("em", { children: children });
    if (leaf.underline)
        children = _jsx("u", { children: children });
    return _jsx("span", { ...attributes, children: children });
}
export { Leaf };

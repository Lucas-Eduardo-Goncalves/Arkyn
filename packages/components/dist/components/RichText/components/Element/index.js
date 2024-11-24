import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Element({ attributes, children, element }) {
    const style = { textAlign: element.align };
    switch (element.type) {
        case "blockQuote":
            return (_jsx("blockquote", { className: "arkynElementBlockquote", style: style, ...attributes, children: children }));
        case "bulletedList":
            return (_jsx("ul", { className: "arkynElementBulletList", style: style, ...attributes, children: children }));
        case "headingOne":
            return (_jsx("h1", { className: "arkynElementHeadingOne", style: style, ...attributes, children: children }));
        case "headingTwo":
            return (_jsx("h2", { className: "arkynElementHeadingTwo", style: style, ...attributes, children: children }));
        case "listItem":
            return (_jsx("li", { className: "arkynElementListItem", style: style, ...attributes, children: children }));
        case "numberedList":
            return (_jsx("ol", { className: "arkynElementNumberedList", style: style, ...attributes, children: children }));
        default:
            return (_jsx("p", { className: "arkynElementParagraph", style: style, ...attributes, children: children }));
    }
}
export { Element };

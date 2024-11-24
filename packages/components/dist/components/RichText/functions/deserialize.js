import parse from "html-react-parser";
const deserialize = (el) => {
    if (typeof el === "string")
        return { text: el || "" };
    function parsedChildren(children) {
        return children.map((child) => deserialize(child));
    }
    const children = Array.isArray(el.props.children)
        ? parsedChildren(el.props.children)
        : [{ text: el.props.children }];
    const childrenString = typeof el.props.children === "string" ? el.props.children : "";
    switch (el.type) {
        case "p":
            return { type: "paragraph", children };
        case "blockquote":
            return { type: "blockQuote", children };
        case "ul":
            return { type: "bulletedList", children };
        case "h1":
            return { type: "headingOne", children };
        case "h2":
            return { type: "headingTwo", children };
        case "li":
            return { type: "listItem", children };
        case "ol":
            return { type: "numberedList", children };
        case "strong":
            return { type: "paragraph", text: childrenString, bold: true };
        case "code":
            return { text: childrenString, code: true };
        case "em":
            return { text: childrenString, italic: true };
        case "u":
            return { text: childrenString, underline: true };
        default:
            return { text: childrenString };
    }
};
const getSlateFromHtml = (html) => {
    const parsed = parse(html);
    if (Array.isArray(parsed)) {
        return parsed.flatMap((el) => {
            if (typeof el === "string")
                return { text: el };
            return deserialize(el);
        });
    }
    else if (typeof parsed === "string") {
        return [{ text: parsed }];
    }
    else {
        return [deserialize(parsed)];
    }
};
export { getSlateFromHtml };

import parse from "html-react-parser";
const deserialize = (el) => {
    if (typeof el === "string") {
        return { text: el };
    }
    const children = Array.isArray(el.props.children)
        ? el.props.children.map((child) => deserialize(child))
        : [{ text: el.props.children || "" }];
    const align = el.props.className?.replace("align_", "");
    switch (el.type) {
        case "img":
            return {
                type: "image",
                align,
                src: el.props.src,
                children: [{ text: "" }],
            };
        case "p":
            return { type: "paragraph", align, children };
        case "blockquote":
            return { type: "blockQuote", align, children };
        case "ul":
            return { type: "bulletedList", align, children };
        case "ol":
            return { type: "numberedList", align, children };
        case "li":
            return { type: "listItem", align, children };
        case "h1":
            return { type: "headingOne", align, children };
        case "h2":
            return { type: "headingTwo", align, children };
        case "strong":
            return { text: el.props.children, bold: true };
        case "code":
            return { text: el.props.children, code: true };
        case "em":
            return { text: el.props.children, italic: true };
        case "u":
            return { text: el.props.children, underline: true };
        default:
            return { text: el.props.children || "" };
    }
};
const getRichTextValueFromHtml = (html) => {
    const parsed = parse(html);
    if (Array.isArray(parsed)) {
        return parsed.map((node) => {
            if (typeof node === "string") {
                return { text: node };
            }
            return deserialize(node);
        });
    }
    if (typeof parsed === "string") {
        return [{ text: parsed }];
    }
    return [deserialize(parsed)];
};
export { getRichTextValueFromHtml };
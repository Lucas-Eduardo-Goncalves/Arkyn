import { Element as SlateElement, Text } from "slate";
const serialize = (node) => {
    if (Text.isText(node)) {
        let text = node.text;
        if (node.bold) {
            text = `<strong>${text}</strong>`;
        }
        if (node.code) {
            text = `<code>${text}</code>`;
        }
        if (node.italic) {
            text = `<em>${text}</em>`;
        }
        if (node.underline) {
            text = `<u>${text}</u>`;
        }
        return text;
    }
    if (SlateElement.isElement(node)) {
        const children = node.children.map((n) => serialize(n)).join("");
        switch (node.type) {
            case "paragraph":
                return `<p>${children}</p>`;
            case "blockQuote":
                return `<blockquote>${children}</blockquote>`;
            case "bulletedList":
                return `<ul>${children}</ul>`;
            case "headingOne":
                return `<h1>${children}</h1>`;
            case "headingTwo":
                return `<h2>${children}</h2>`;
            case "listItem":
                return `<li>${children}</li>`;
            case "numberedList":
                return `<ol>${children}</ol>`;
            default:
                return children;
        }
    }
    return "";
};
const getHtmlFromSlate = (editor) => {
    return editor.children.map((node) => serialize(node)).join("");
};
export { getHtmlFromSlate };

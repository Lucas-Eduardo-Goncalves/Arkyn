import { Element as SlateElement, Text } from "slate";
import { RichTextValue } from "@arkyn/types";

const serialize = (node: any): string => {
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
    const children = node.children.map((n: any) => serialize(n)).join("");
    const alignStyle = node.align || "left";

    switch (node.type) {
      case "image":
        return `<img src="${node.src}" class="align_${alignStyle}" />`;
      case "paragraph":
        return `<p class="align_${alignStyle}">${children}</p>`;
      case "blockQuote":
        return `<blockquote class="align_${alignStyle}">${children}</blockquote>`;
      case "bulletedList":
        return `<ul class="align_${alignStyle}">${children}</ul>`;
      case "headingOne":
        return `<h1 class="align_${alignStyle}">${children}</h1>`;
      case "headingTwo":
        return `<h2 class="align_${alignStyle}">${children}</h2>`;
      case "listItem":
        return `<li class="align_${alignStyle}">${children}</li>`;
      case "numberedList":
        return `<ol class="align_${alignStyle}">${children}</ol>`;
      default:
        return children;
    }
  }

  return "";
};

const getHtmlFromRichTextValue = (value: RichTextValue): string => {
  return value.map((node) => serialize(node)).join("");
};

export { getHtmlFromRichTextValue };

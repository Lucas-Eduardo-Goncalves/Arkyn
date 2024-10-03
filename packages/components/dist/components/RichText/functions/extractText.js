import { Node } from "slate";
function extractText(nodes) {
    return nodes.map((n) => Node.string(n)).join("");
}
export { extractText };

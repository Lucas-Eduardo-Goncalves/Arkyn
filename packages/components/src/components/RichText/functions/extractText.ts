import { Descendant, Node } from "slate";

function extractText(nodes: Descendant[]) {
  return nodes.map((n) => Node.string(n)).join("");
}

export { extractText };

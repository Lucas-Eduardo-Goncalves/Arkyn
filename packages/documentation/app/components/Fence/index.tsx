import Prism from "prismjs";

import { Container } from "./styles";
import "./styles.css";

type FenceProps = {
  children: string | string;
  type?: string;
  language?:
    | "markup"
    | "html"
    | "xml"
    | "svg"
    | "mathml"
    | "ssml"
    | "atom"
    | "rss"
    | "css"
    | "clike"
    | "javascript"
    | "js"
    | "abap"
    | "abnf"
    | "actionscript"
    | "ada"
    | "agda"
    | "al"
    | "antlr4"
    | "g4"
    | "apacheconf"
    | "apex"
    | "apl"
    | "applescript"
    | "aql"
    | "arduino"
    | "ino";
};

function Fence({ type, language, children }: FenceProps) {
  if (!language) {
    return (
      <Container className={type ? "has-type" : ""}>
        {type && <header>{type}</header>}
        <pre className={`language-${language}`}>{children}</pre>
      </Container>
    );
  }

  const content = Prism.highlight(
    children,
    Prism.languages[language],
    language
  );

  return (
    <Container className={type ? "has-type" : ""}>
      {type && <header>{type}</header>}
      <pre
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
}

export { Fence };

import { ReactNode } from "react";
import { Container } from "./styles";

type ParagraphProps = {
  children: ReactNode;
};

function Paragraph({ children }: ParagraphProps) {
  return <Container>{children}</Container>;
}

export { Paragraph };

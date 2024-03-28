import { ReactNode } from "react";
import { Container } from "./styles";

type NoteProps = {
  children: ReactNode;
  type: "danger" | "success" | "warning" | "info";
};

function Note({ children, type }: NoteProps) {
  return <Container className={type}>{children}</Container>;
}

export { Note };

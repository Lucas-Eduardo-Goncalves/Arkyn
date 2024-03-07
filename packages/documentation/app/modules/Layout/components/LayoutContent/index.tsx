import { ReactNode } from "react";
import { Container } from "./styles";

type LayoutContentProps = {
  children: ReactNode;
};

function LayoutContent({ children }: LayoutContentProps) {
  return <Container>{children}</Container>;
}

export { LayoutContent };

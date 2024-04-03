import { ReactNode } from "react";
import { Container } from "./styles";

type NavigationMenu = {
  children: ReactNode;
};

function NavigationMenu({ children }: NavigationMenu) {
  return <Container>{children}</Container>;
}

export { NavigationMenu };

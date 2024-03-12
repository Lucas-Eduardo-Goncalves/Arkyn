import { ReactNode } from "react";
import { Container } from "./styles";

type NavigationContainerProps = {
  children: ReactNode;
};

function NavigationContainer({ children }: NavigationContainerProps) {
  return <Container>{children}</Container>;
}

export { NavigationContainer };

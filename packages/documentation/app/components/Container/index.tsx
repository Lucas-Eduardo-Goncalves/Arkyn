import { ReactNode } from "react";
import { Container as StyledContainer } from "./styles";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export { Container };

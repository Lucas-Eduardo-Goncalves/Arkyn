import { ReactNode } from "react";
import { Container } from "./styles";

type FenceProps = {
  children: ReactNode;
};

function Fence({ children }: FenceProps) {
  return <Container>{children}</Container>;
}

export { Fence };

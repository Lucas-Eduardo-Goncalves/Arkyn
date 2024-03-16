import { ReactNode } from "react";
import { Container } from "./styles";

type FenceProps = {
  type?: string;
  children: ReactNode;
};

function Fence({ type, children }: FenceProps) {
  return (
    <Container className={type ? "has-type" : ""}>
      {type && <header>{type}</header>}
      {children}
    </Container>
  );
}

export { Fence };

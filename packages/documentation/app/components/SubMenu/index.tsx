import { ReactNode } from "react";
import { Container, LinkContainer } from "./styles";

type SubMenuProps = {
  children: ReactNode;
  title?: string;
};

type SubMenuLinkProps = {
  id: string;
  children: string;
};

function SubMenu({ children, title = "Nesta página" }: SubMenuProps) {
  return (
    <Container>
      <strong>{title}</strong>
      {children}
    </Container>
  );
}

function SubMenuLink({ children, id }: SubMenuLinkProps) {
  return (
    <LinkContainer to={id} spy={true} smooth={true} offset={-10} duration={500}>
      {children}
    </LinkContainer>
  );
}

export { SubMenu, SubMenuLink };

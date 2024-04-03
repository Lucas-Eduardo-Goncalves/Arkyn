import { ReactNode } from "react";
import { NavContainer, LinkContainer } from "./styles";

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
    <NavContainer>
      <strong>{title}</strong>
      {children}
    </NavContainer>
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

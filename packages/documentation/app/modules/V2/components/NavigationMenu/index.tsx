import { useLoaderData } from "@remix-run/react";

import { ReactNode } from "react";
import { loader } from "../../functions/loader";
import { Container } from "./styles";

type NavigationMenuProps = {
  children: ReactNode;
};

function NavigationMenu({ children }: NavigationMenuProps) {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Container>
      <nav>{children}</nav>
      <footer>
        <strong title={user.name}>{user.name}</strong>
        <p title={user.mail}>{user.mail}</p>
      </footer>
    </Container>
  );
}

export { NavigationMenu };

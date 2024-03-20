import { Badge } from "@arkyn/components";
import { Link } from "@remix-run/react";

import { version } from "../../../../../package.json";
import { Container } from "./styles";

function LayoutHeader() {
  return (
    <Container>
      <h1>Arkyn</h1>
      <nav>
        <Link to="/v1/about">About</Link>
        <Link to="/v1/contact">Contact</Link>
      </nav>
      <Badge scheme="secondary" size="lg">
        Versão: {version}
      </Badge>
    </Container>
  );
}

export { LayoutHeader };

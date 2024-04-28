import { Link } from "@remix-run/react";
import { Container } from "./styles";
import { Tooltip } from "@arkyn/components";

function LayoutHeader() {
  return (
    <Container>
      <h1>Arkyn | Inbox Flow</h1>
      <nav>
        <Tooltip text="Go to doc's" orientation="left">
          <Link to="/v1/doc/introduction">Documentation</Link>
        </Tooltip>
      </nav>
    </Container>
  );
}

export { LayoutHeader };

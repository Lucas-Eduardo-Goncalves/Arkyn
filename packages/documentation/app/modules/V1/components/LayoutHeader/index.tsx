import { Link } from "@remix-run/react";
import { Container } from "./styles";
import { Tooltip } from "@arkyn/components";

function LayoutHeader() {
  return (
    <Container>
      <h1>Arkyn</h1>
      <nav>
        <Tooltip text="Contact the developer" orientation="left">
          <Link to="/v1/contact">Contact</Link>
        </Tooltip>
        <Tooltip text="Access your flow control" orientation="left">
          <Link to="/auth/sign-in?redirectURL=/v2/channels">Inbox API</Link>
        </Tooltip>
      </nav>
    </Container>
  );
}

export { LayoutHeader };

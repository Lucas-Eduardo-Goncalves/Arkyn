import { Link } from "@remix-run/react";
import { Container } from "./styles";

function LayoutHeader() {
  return (
    <Container>
      <h1>Arkyn</h1>
      <nav>
        <Link to="/v1/contact">Contact</Link>
        <Link to="/auth/sign-in?redirectURL=/v2/channels">Inbox API</Link>
      </nav>
    </Container>
  );
}

export { LayoutHeader };

import { version } from "../../../../../package.json";
import { Container } from "./styles";

function LayoutFooter() {
  return (
    <Container>
      <h2>
        Distribuído por <strong>Lucas Gonçalves</strong>
      </h2>
      <p>© 2024 The Arkyn Project.</p>
      <p>Version - {version}</p>
    </Container>
  );
}

export { LayoutFooter };

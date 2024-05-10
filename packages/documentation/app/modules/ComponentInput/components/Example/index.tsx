import { Input } from "@arkyn/components";
import { Container } from "./styles";
import { CircleAlert } from "lucide-react";

function Example() {
  return (
    <>
      <Container>
        <Input
          mask="+0 (___) ___-__-__"
          replacement={{ _: /\d/ }}
          name="asd"
          leftIcon={CircleAlert}
          type="masked"
        />
      </Container>
    </>
  );
}

export { Example };

import { Input } from "@arkyn/components";

import { CircleAlert } from "lucide-react";
import { Container } from "./styles";

function Example() {
  return (
    <>
      <Container>
        <Input
          type="masked"
          mask="__/__"
          replacement={{ _: /\d/ }}
          name="asd"
          rightIcon={CircleAlert}
          showMask={false}
          placeholder="mm/aa"
        />
      </Container>
    </>
  );
}

export { Example };

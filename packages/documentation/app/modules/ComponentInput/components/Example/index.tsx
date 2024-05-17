import { Input } from "@arkyn/components";

import { CircleAlert } from "lucide-react";
import { Container } from "./styles";

function Example() {
  return (
    <>
      <Container>
        <Input
          type="masked"
          mask="+55 (__) _____-____"
          replacement={{ _: /\d/ }}
          name="asd"
          rightIcon={CircleAlert}
          showMask
          onChange={(e) => console.log(e.target.value)}
        />
      </Container>
    </>
  );
}

export { Example };

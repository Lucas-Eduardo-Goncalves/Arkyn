import { Badge } from "@arkyn/components";
import { useState } from "react";

import { Fence, Title } from "~/components";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import { SchemeSelect, SizeSelect, VariantSelect } from "../Selects";
import { Container } from "./styles";

function Example() {
  const [size, setSize] = useState<SizeProps>("md");
  const [variant, setVariant] = useState<VariantProps>("solid");
  const [scheme, setScheme] = useState<SchemeProps>("primary");

  return (
    <>
      <Title as="h3">Exemplo</Title>

      <Container>
        <header>
          <SizeSelect size={size} setSize={setSize} />
          <VariantSelect variant={variant} setVariant={setVariant} />
          <SchemeSelect scheme={scheme} setScheme={setScheme} />
        </header>

        <Badge size={size} variant={variant} scheme={scheme}>
          Badge
        </Badge>
      </Container>

      <Fence type="tsx" language="html">
        {`<Badge size="${size}" variant="${variant}" scheme="${scheme}">
  Badge
</Badge>`}
      </Fence>
    </>
  );
}

export { Example };

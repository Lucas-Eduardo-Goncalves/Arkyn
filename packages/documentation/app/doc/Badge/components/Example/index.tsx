import { Badge } from "@arkyn/components";
import { useState } from "react";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import { SchemeSelect } from "../SchemeSelect";
import { SizeSelect } from "../SizeSelect";
import { VariantSelect } from "../VariantSelect";
import { Container } from "./styles";
import { Fence } from "~/components/Fence";
import { Title } from "~/components/Title";

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

      <Fence type="tsx">
        {`import { Badge } from "@arkyn/components";
      

function MyComponent() {
  return (
    <Badge size="${size}" variant="${variant}" scheme="${scheme}">
      Badge
    </Badge>
  )
}
      `}
      </Fence>
    </>
  );
}

export { Example };

import { Button } from "@arkyn/components";
import { useState } from "react";

import { Fence, Title } from "~/components";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import {
  LoadingSelect,
  SchemeSelect,
  SizeSelect,
  VariantSelect,
} from "../Selects";
import { Container } from "./styles";

function Example() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [size, setSize] = useState<SizeProps>("md");
  const [variant, setVariant] = useState<VariantProps>("solid");
  const [scheme, setScheme] = useState<SchemeProps>("primary");

  return (
    <>
      <Title as="h3">Exemplo</Title>

      <Container>
        <header>
          <LoadingSelect isLoading={isLoading} setIsLoading={setIsLoading} />
          <SizeSelect size={size} setSize={setSize} />
          <VariantSelect variant={variant} setVariant={setVariant} />
          <SchemeSelect scheme={scheme} setScheme={setScheme} />
        </header>

        <Button
          isLoading={isLoading}
          size={size}
          variant={variant}
          scheme={scheme}
        >
          Button
        </Button>
      </Container>
      <Fence type="tsx" language="html">
        {`<Button isLoading={${isLoading}} size="${size}" variant="${variant}" scheme="${scheme}">
  Button
</Button>`}
      </Fence>
    </>
  );
}

export { Example };

import { Button } from "@arkyn/components";
import { useState } from "react";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import { LoadingSelect } from "../LoadingSelect";
import { SchemeSelect } from "../SchemeSelect";
import { SizeSelect } from "../SizeSelect";
import { VariantSelect } from "../VariantSelect";
import { Container } from "./styles";

function Example() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [size, setSize] = useState<SizeProps>("md");
  const [variant, setVariant] = useState<VariantProps>("solid");
  const [scheme, setScheme] = useState<SchemeProps>("primary");

  return (
    <Container>
      <header>
        <LoadingSelect isLoading={isLoading} setIsLoading={setIsLoading} />
        <SizeSelect size={size} setSize={setSize} />
        <VariantSelect variant={variant} setVariant={setVariant} />
        <SchemeSelect scheme={scheme} setScheme={setScheme} />
      </header>

      <div>
        <Button
          isLoading={isLoading}
          size={size}
          variant={variant}
          scheme={scheme}
        >
          Button
        </Button>
      </div>
    </Container>
  );
}

export { Example };

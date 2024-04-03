import { IconButton } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { useState } from "react";

import { Fence } from "~/components";

import { SchemeProps, SizeProps, VariantProps } from "../../types";
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
      <Container>
        <header>
          <LoadingSelect isLoading={isLoading} setIsLoading={setIsLoading} />
          <SizeSelect size={size} setSize={setSize} />
          <VariantSelect variant={variant} setVariant={setVariant} />
          <SchemeSelect scheme={scheme} setScheme={setScheme} />
        </header>

        <IconButton
          icon={CircleDashed}
          aria-label="Icon button example"
          isLoading={isLoading}
          size={size}
          variant={variant}
          scheme={scheme}
        />
      </Container>

      <Fence type="tsx" language="html">
        {`<IconButton 
  icon={CircleDashed}
  aria-label="Icon button example"
  isLoading={${isLoading}} 
  size="${size}" 
  variant="${variant}" 
  scheme="${scheme}"
/>`}
      </Fence>
    </>
  );
}

export { Example };

import { IconButton } from "@arkyn/components";
import { useState } from "react";
import { CircleDashed } from "lucide-react";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import { LoadingSelect } from "../LoadingSelect";
import { SchemeSelect } from "../SchemeSelect";
import { SizeSelect } from "../SizeSelect";
import { VariantSelect } from "../VariantSelect";
import { Container } from "./styles";
import { Fence } from "~/components/Fence";

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

      <Fence>
        {`import { IconButton } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
      
function MyComponent() {
  return (
    <IconButton 
      icon={CircleDashed}
      aria-label="Icon button example"
      isLoading={${isLoading}} 
      size="${size}" 
      variant="${variant}" 
      scheme="${scheme}"
    />
  );
}
    `}
      </Fence>
    </>
  );
}

export { Example };

import { Badge } from "@arkyn/components";
import { useState } from "react";

import { SchemeProps, SizeProps, VariantProps } from "../../_types";
import { SchemeSelect } from "../SchemeSelect";
import { SizeSelect } from "../SizeSelect";
import { VariantSelect } from "../VariantSelect";
import { Container } from "./styles";

function Example() {
  const [size, setSize] = useState<SizeProps>("md");
  const [variant, setVariant] = useState<VariantProps>("solid");
  const [scheme, setScheme] = useState<SchemeProps>("primary");

  return (
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
  );
}

export { Example };

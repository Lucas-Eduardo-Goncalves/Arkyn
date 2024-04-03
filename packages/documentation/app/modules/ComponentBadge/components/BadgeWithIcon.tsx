import { Badge } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function BadgeWithIcon() {
  return (
    <>
      <Title as="h3">Badge com icone</Title>

      <Paragraph>
        Você pode adicionar ícones esquerdo e direito ao emblema usando os
        adereços <code>leftIcon</code> e <code>rightIcon</code> respectivamente.
      </Paragraph>

      <Note type="warning">
        Os valores devem ser elementos de tipo <code>LucideIcon</code>,{" "}
        <strong>não</strong> strings e <strong>não</strong> jsx.
      </Note>

      <ExampleContainer>
        <Badge leftIcon={CircleDashed}>Car</Badge>
        <Badge rightIcon={CircleDashed} variant="outline">
          Calc
        </Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Badge leftIcon={CircleDashed}>Car</Badge>
<Badge rightIcon={CircleDashed} variant="outline">Calc</Badge>`}
      </Fence>
    </>
  );
}

export { BadgeWithIcon };

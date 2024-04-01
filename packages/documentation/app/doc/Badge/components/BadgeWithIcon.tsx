import { Badge } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function BadgeWithIcon() {
  return (
    <>
      <Title as="h3">Badge com icone</Title>

      <Paragraph>
        Você pode adicionar ícones esquerdo e direito ao componente badge usando
        os adereços <code>leftIcon</code> e <code>rightIcon</code>{" "}
        respectivamente.
      </Paragraph>

      <Note type="warning">
        Os valores da propriedade <code>leftIcon</code> e <code>rightIcon</code>{" "}
        devem ser elementos de react de tipo <code>LucideIcon</code>, NÃO
        strings.
      </Note>

      <ExampleContainer>
        <Badge leftIcon={CircleDashed}>Car</Badge>
        <Badge rightIcon={CircleDashed} variant="outline">
          Calc
        </Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<div className="flex-div">
  <Badge leftIcon={CircleDashed}>Car</Badge>
  <Badge rightIcon={CircleDashed} variant="outline">Calc</Badge>
</div>`}
      </Fence>
    </>
  );
}

export { BadgeWithIcon };

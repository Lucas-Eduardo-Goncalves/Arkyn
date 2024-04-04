import { Button } from "@arkyn/components";
import { Calculator, CarFront } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function ButtonWithIcon() {
  return (
    <>
      <Title as="h3">Botão com icone</Title>

      <Paragraph>
        Você pode adicionar ícones esquerdo e direito ao botão usando os
        adereços <code>leftIcon</code> e <code>rightIcon</code> respectivamente.
      </Paragraph>

      <Note type="warning">
        Os valores devem ser elementos de tipo <code>LucideIcon</code>,{" "}
        <strong>não</strong> strings e <strong>não</strong> jsx.
      </Note>

      <ExampleContainer>
        <Button leftIcon={CarFront}>Look the car</Button>
        <Button rightIcon={Calculator} variant="outline">
          Calculate
        </Button>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Button leftIcon={CarFront}>Look the car</Button>
<Button rightIcon={Calculator} variant="outline">Calculate</Button>`}
      </Fence>
    </>
  );
}

export { ButtonWithIcon };

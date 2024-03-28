import { Button } from "@arkyn/components";
import { Calculator, CarFront } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function ButtonWithIcon() {
  return (
    <>
      <Title as="h3">Botão com icone</Title>

      <Paragraph>
        Você pode adicionar ícones esquerdo e direito ao componente Button
        usando os adereços <code>leftIcon</code> e <code>rightIcon</code>{" "}
        respectivamente.
      </Paragraph>

      <Note type="warning">
        Os valores da propriedade <code>leftIcon</code> e <code>rightIcon</code>{" "}
        devem ser elementos de react de tipo <code>LucideIcon</code>, NÃO
        strings.
      </Note>

      <ExampleContainer>
        <Button leftIcon={CarFront}>Look the car</Button>
        <Button rightIcon={Calculator} variant="outline">
          Calculate
        </Button>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<div className="flex-div">
  <Button leftIcon={CarFront}>Look the car</Button>
  <Button rightIcon={Calculator} variant="outline">Calculate</Button>
</div>`}
      </Fence>
    </>
  );
}

export { ButtonWithIcon };

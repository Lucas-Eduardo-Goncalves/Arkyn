import { Button } from "@arkyn/components";
import { Calculator, CarFront } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function ButtonWithIcon() {
  return (
    <>
      <Title as="h3">Button with icon</Title>

      <Paragraph>
        You can add left and right icons to the button using the
        <code>leftIcon</code> and <code>rightIcon</code> props, respectively.
      </Paragraph>

      <Note type="warning">
        Values ​​must be elements of <code>LucideIcon</code> type,{" "}
        <strong>not</strong> strings, <strong>or</strong> jsx.
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

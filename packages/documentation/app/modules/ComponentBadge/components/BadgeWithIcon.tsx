import { Badge } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function BadgeWithIcon() {
  return (
    <>
      <Title as="h3">Badge with icon</Title>

      <Paragraph>
        You can add left and right icons to the emblem using the
        <code>leftIcon</code> and <code>rightIcon</code> props respectively.
      </Paragraph>

      <Note type="warning">
        Values ​​must be elements of type <code>LucideIcon</code>,{" "}
        <strong>not</strong> strings and <strong>not</strong> jsx.
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

import { Paragraph, Title } from "~/components";

function Label() {
  return (
    <>
      <Title as="h2">Aria label</Title>

      <Paragraph>
        Since icon buttons do not contain descriptive content, it is{" "}
        <strong>mandatory</strong> to use the <code>aria-label</code> property 
        , this property will give the button a description about its
        functionality, allowing people with visual problems to use your website
        normally.
      </Paragraph>
    </>
  );
}

export { Label };

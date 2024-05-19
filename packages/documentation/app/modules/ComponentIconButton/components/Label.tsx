import { Paragraph, Title } from "~/components";

function Label() {
  return (
    <>
      <Title as="h2">Aria label</Title>

      <Paragraph>
        The icon button, as it does not contain descriptive content, is{" "}
        <strong>mandatory</strong> the use of a property <code>aria-label</code>
        , this property will make the button have a description about its
        functionality, making people with visual problems can use your website
        normally.
      </Paragraph>
    </>
  );
}

export { Label };

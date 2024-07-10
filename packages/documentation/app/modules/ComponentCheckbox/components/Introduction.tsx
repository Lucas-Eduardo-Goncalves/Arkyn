import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">Checkbox</Title>

      <Paragraph>
        A checkbox component is a reusable interface element that encapsulates
        the functionality of a checkbox input. It usually includes an input box
        element, a label, and styling. The checkbox input element handles user
        interaction, while the label provides descriptive text for the option
        and the styling enhances the visual appearance.
      </Paragraph>
    </>
  );
}

export { Introduction };

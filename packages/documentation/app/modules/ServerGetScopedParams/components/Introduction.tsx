import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">getScopedParams</Title>

      <Paragraph>
        Function provides a streamlined approach to extract parameters from a
        requested URL, enabling filtered access based on a defined scope. It
        simplifies the process of retrieving specific parameter subsets within
        larger URL query strings.
      </Paragraph>

      <Paragraph>
        <strong>- Scoped Parameter Extraction:</strong> Filters parameters based
        on a specified scope prefix, returning only those that match the defined
        scope.
      </Paragraph>

      <Paragraph>
        <strong>- Flexible Scope Handling:</strong> Accepts an optional scope
        value, allowing for targeted parameter retrieval or returning all
        parameters if omitted.
      </Paragraph>

      <Paragraph>
        <strong>- Convenient Usage:</strong> Provides a straightforward
        interface for extracting scoped parameters, simplifying code and
        improving readability.
      </Paragraph>
    </>
  );
}

export { Introduction };

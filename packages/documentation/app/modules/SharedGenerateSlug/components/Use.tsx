import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        The function takes a single argument, being a string in which the
        function is will be used to create the slug.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { generateSlug } from "@arkyn/shared";

function someFunction() {
  const slug = generateSlug("I love my cat");
  return slug; "i-love-my-cat"
}`}
      </Fence>

      <Paragraph>She follows a detailed process to ensure slugs are:</Paragraph>
      <Paragraph>
        <strong>- Compatible with URLs:</strong> Removes special characters that
        are not allowed in URLs, such as accents (<code>à</code>, <code>ê</code>
        , <code>í</code>) and punctuation (<code>!</code>, <code>@</code>,{" "}
        <code>#</code>). <br />
        <strong>-Separated by hyphen:</strong> Replaces white spaces with
        hyphens (<code>-</code>), making the slug more readable and separating
        the words. <br />
        <strong>- Lowercase</strong>: Converts the entire string to lowercase,
        ensuring consistency in slug generation. <br />
        <strong>- Clean hyphens:</strong> Removes repeated sequences of hyphens,
        avoiding disorganized URLs. <br />
        <strong>- No hyphens at the beginning or end:</strong> Remove hyphens at
        the beginning and at the end of the slug, ensuring valid URLs.
      </Paragraph>
    </>
  );
}

export { Use };

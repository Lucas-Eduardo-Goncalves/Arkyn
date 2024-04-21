import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">generateSlug</Title>

      <Paragraph>
        This function was created to generate slugs (short texts used in URLs)
        clean and consistent from strings (text) provided by the user.
      </Paragraph>

      <Paragraph>
        By using <code>generateSlug</code>, you guarantee the creation of slugs
        standardized and friendly URLs, which improves the user experience user
        and search engine optimization for your website.
      </Paragraph>
    </>
  );
}

export { Introduction };

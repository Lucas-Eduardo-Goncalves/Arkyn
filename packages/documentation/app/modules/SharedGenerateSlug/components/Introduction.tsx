import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">generateSlug</Title>

      <Paragraph>
        This function was created to generate clean and consistent slugs (short texts used in URLs)
         from strings (texts) provided by the user.
      </Paragraph>

      <Paragraph>
        By using <code>generateSlug</code>, you guarantee the creation of standardized slugs
         and friendly URLs, which improve the user experience 
        and optimize the search engine of your website.
      </Paragraph>
    </>
  );
}

export { Introduction };

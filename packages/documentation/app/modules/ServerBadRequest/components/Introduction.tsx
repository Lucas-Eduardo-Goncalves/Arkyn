import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">badRequest</Title>

      <Paragraph>
        A simple function to simplify the process of sending email responses
        error in your Remix application.
      </Paragraph>

      <Paragraph>
        The function uses Remix&apos;s <code>json</code> utility to convert the
        error data to JSON format and send it in the response. When setting
        status code as 400 (default), the function indicates to the customer
        that the sent request is malformed or contains invalid information.
      </Paragraph>

      <Paragraph>
        It&apos;s purpose is to centralize error handling in your application,
        simplifying the code, standardizing responses and offering an
        environment more efficient development.
      </Paragraph>
    </>
  );
}

export { Introduction };

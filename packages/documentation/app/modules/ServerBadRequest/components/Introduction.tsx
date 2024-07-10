import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">badRequest</Title>

      <Paragraph>
        A simple function to simplify the process of sending error responses
       in your Remix application.
      </Paragraph>

      <Paragraph>
        The function uses Remix&apos;s <code>json</code> utility to convert the
        error data to JSON format and send it in the response. When setting
        status code as 400 (default), the function indicates to the customer
        that the sent request is malformed or contains invalid information.
      </Paragraph>

      <Paragraph>
        Its purpose is to centralize error handling in your application,
        simplifying the code, standardizing responses and offering a
         more efficient development environment.
      </Paragraph>
    </>
  );
}

export { Introduction };

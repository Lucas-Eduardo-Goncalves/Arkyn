import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        The function takes two values; The first being a return object to the
        client; The second being the HTTP response status. It&apos;s optional,
        its default value is <code>400</code>.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { badRequest } from "@arkyn/server";

function someFunction() {
  return badRequest({ message: "This is a server error" }, 500)
}

export { someFunction }; `}
      </Fence>
    </>
  );
}

export { Use };

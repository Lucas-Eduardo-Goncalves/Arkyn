import { Fence, Note, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        <strong>- Create a Request object:</strong> Obtain a valid Request
        object that represents the incoming request. This object comes from the
        server side.
      </Paragraph>

      <Paragraph>
        <strong>- Invoke the Function:</strong> Call the{" "}
        <code>getScopedParams</code> function, passing the Request object and an
        optional scope parameter.
      </Paragraph>

      <Note type="info">
        Omitting the scope argument or using an empty value (scope:
        &quot;&quot;) will result in all parameters being extracted from the
        URL.
      </Note>

      <Fence language="js" type="typescript">
        {`import { getScopedParams } from "@arkyn/server";
import type { LoaderFunctionArgs } from "@remix-run/node";

function loader(args: LoaderFunctionArgs) {
  // this is a Remix URL: 
  // http://localhost:3000/users?users_table:search=SomeUser&accounts_table:search=SomeAccount
  
  const usersParams = getScopedParams(args.request, "users_table");
  const accountsParams = getScopedParams(args.request, "accounts_table");

  console.log(usersParams.get("search"));
  console.log(accountsParams.has("search"));
  
  return null;
};`}
      </Fence>
    </>
  );
}

export { Use };

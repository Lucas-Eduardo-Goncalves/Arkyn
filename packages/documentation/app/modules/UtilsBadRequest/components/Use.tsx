import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <Fence language="js" type="typescript">
        {`import { badRequest } from "@arkyn/utils";

export default function action() {
  const errorExists = true;
  
  if(errorExists) {
    return badRequest({ message: "This is a server error" }, 500)
  }

  return null
}`}
      </Fence>
    </>
  );
}

export { Use };

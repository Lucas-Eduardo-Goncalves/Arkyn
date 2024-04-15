import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Modo de uso</Title>

      <Paragraph>
        A função recebe dois argumentos; Sendo o primeiro um objeto de retorno
        ao cliente; O segunda sendo o status de resposta HTTP. É opcional, seu
        valor default é <code>400</code>.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { badRequest } from "@arkyn/utils";

function someFunction() {
  return badRequest({ message: "This is a server error" }, 500)
}

export { someFunction }; `}
      </Fence>
    </>
  );
}

export { Use };

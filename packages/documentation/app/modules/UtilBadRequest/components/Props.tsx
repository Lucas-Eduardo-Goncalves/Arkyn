import { Fence, Paragraph, Title } from "~/components";

function Props() {
  return (
    <>
      <Title as="h3">Propriedades</Title>

      <Paragraph>
        A função recebe dois argumentos, o primeiro sendo o objeto que será
        retornado ao usuário. A segunda será o status de resposta HTTP que é
        opcional e por padrão será <code>400</code>.
      </Paragraph>

      <Fence
        type="typescript"
        language="js"
      >{`badRequest(argumentoARetornar, statusHTTPOpcional)}`}</Fence>
    </>
  );
}

export { Props };

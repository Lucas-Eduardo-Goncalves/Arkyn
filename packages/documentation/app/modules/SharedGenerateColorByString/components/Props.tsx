import { Paragraph, Title } from "~/components";

function Props() {
  return (
    <>
      <Title as="h3">Propriedades</Title>

      <Paragraph>
        A função recebe um único argumento, sendo uma string na qual a função se
        baseará para criar a cor em hexadecimal.
      </Paragraph>
    </>
  );
}

export { Props };

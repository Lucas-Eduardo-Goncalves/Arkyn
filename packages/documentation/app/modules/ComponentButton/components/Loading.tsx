import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Loading() {
  return (
    <>
      <Title as="h3">Carregamento</Title>

      <Paragraph>
        Utilize o suporte <code>isLoading</code> para mostrar seu estado de
        carregamento. Por padrão, o botão mostrará um controle giratório e
        deixará a largura do botão inalterada. <br />
        Você também pode passar a propriedade <code>loadingText</code> para
        adicionar texto durante o carregamento.
      </Paragraph>

      <Note type="warning">
        Caso o <code>loadingText</code> seja maior que o texto + icone inserido
        no próprio botão, a caracterisica de largura do botão não será ignorada,
        fazendo com que o botão cresça de tamanho.
      </Note>

      <ExampleContainer>
        <Button isLoading>Some Text</Button>
        <Button isLoading loadingText="Loading...">
          Some Text
        </Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button isLoading>Some Text</Button>
<Button isLoading loadingText="Loading...">
  Some Text 
</Button>`}
      </Fence>
    </>
  );
}

export { Loading };

import { Container } from "~/components/Container";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

function View() {
  return (
    <Container>
      <Title as="h1">Começo Rápido</Title>

      <Paragraph>
        Para começar, é necessário fazer a instalação da biblioteca e suas
        dependências de pares. A biblioteca não trará nada consigo, será
        necessário uma instalação manual.
      </Paragraph>

      <Paragraph>
        Instale os pacotes:
        <code className="area">
          bun i @arkyn/components @arkyn/utils @arkyn/types @arkyn/api
          @arkyn/hooks
        </code>
      </Paragraph>

      <Paragraph>
        A instalação abaixo será definida <strong>por pacotes</strong>, isso
        implica que os pacotes serão repetidos em suas instalações, é
        recomendado antes de fazer qualquer instalação, conferir se vocẽ já não
        tem o pacote pré instalado em seu projeto. Sempre confira seu
        package.json antes de instalar qualquer coisa! Para o pacote{" "}
        <code>@arkyn/utils</code> nenhuma instalação será necessaria.
      </Paragraph>

      <Paragraph>
        <code>@arkyn/api</code>
        <code className="area">
          bun i @remix-run/node @remix-run/server-runtime
        </code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/components</code>
        <code className="area">
          bun i lucide-react framer-motion react react-dom
        </code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/hooks</code>
        <code className="area">bun i react</code>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/types</code>
        <code className="area">bun i lucide-react react react-dom</code>
      </Paragraph>
    </Container>
  );
}

export { View };

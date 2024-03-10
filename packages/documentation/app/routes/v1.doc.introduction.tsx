import { Container } from "~/components/Container";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

export default function IntroductionRoute() {
  return (
    <Container>
      <Title as="h1">Arkyn</Title>

      <Paragraph>
        Arkyn é uma biblioteca de componentes para React + Remix focada em
        velocidade, criada para uma criação rápida de websites. Com ela, você
        pode ter websites com carregamento instantâneo, alta performance e
        experiência de desenvolvedor aprimorada, tudo isso utilizando o melhor
        da tecnologia com Bun e Vite.
      </Paragraph>

      <Paragraph>
        O Arkyn é dividido em 5 pacotes para facilitar o seu desenvolvimento:
        <br /> <code>@arkyn/api</code> com hooks para consumir APIs;
        <br />
        <code> @arkyn/components</code> com componentes UI/UX prontos para uso;
        <br /> <code>@arkyn/hooks</code> com hooks customizados para diversas
        funcionalidades;
        <br /> <code>@arkyn/utils</code> com funções utilitárias;
        <br /> <code>@arkyn/types</code> com interfaces e tipos TypeScript
        utilizados.
      </Paragraph>

      <Paragraph>
        Essa organização modular facilita a importação dos pacotes que você
        precisa, tornando o seu código mais limpo e organizado, criando uma
        otima integração com o Remix que carrega apenas o que é importado em sua
        rota, então, {'"xô"'} código não utilizado!
      </Paragraph>

      <Title as="h2">Começo Rápido</Title>

      <Paragraph>
        Para começar, é necessário fazer a instalação da biblioteca e suas
        dependências de pares. A biblioteca não trará nada consigo, será
        necessário uma instalação manual.
      </Paragraph>

      <Paragraph>
        Instale os pacotes:
        <pre>
          bun i @arkyn/components @arkyn/utils @arkyn/types @arkyn/api
          @arkyn/hooks
        </pre>
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
        <pre>bun i @remix-run/node @remix-run/server-runtime</pre>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/components</code>
        <pre>bun i lucide-react framer-motion react react-dom</pre>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/hooks</code>
        <pre>bun i react</pre>
      </Paragraph>

      <Paragraph>
        <code>@arkyn/types</code>
        <pre>bun i lucide-react react react-dom</pre>
      </Paragraph>
    </Container>
  );
}

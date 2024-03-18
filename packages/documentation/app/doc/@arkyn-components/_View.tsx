import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Badge, Sparkles } from "lucide-react";

import {
  Container,
  Fence,
  NavigationButton,
  NavigationContainer,
  Paragraph,
  Title,
} from "~/components";

import { RootCssExample } from "./components";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">@arkyn/components</Title>

      <Paragraph>
        A biblioteca @arkyn/components é uma coleção de componentes React
        desenvolvidos com flexibilidade em mente, permitindo uma fácil
        integração e personalização em projetos React e RemixJS. Com uma
        variedade de componentes prontos para uso, ela visa simplificar o
        desenvolvimento de interfaces de usuário modernas e atraentes.
      </Paragraph>

      <Paragraph>
        Para começar a usar os componentes da biblioteca, siga estas etapas
        simples de configuração:
      </Paragraph>

      <Title as="h3">Instalação de Pacotes</Title>

      <Paragraph>
        Certifique-se de ter os seguintes pacotes instalados em seu projeto:{" "}
        <br />
        <code>lucide-react</code>: Fornece ícones escaláveis e personalizáveis
        para seus componentes.
        <br />
        <code>framer-motion</code>: Biblioteca para adicionar animações fluidas
        e interativas.
        <br />
        <code>react e react-dom</code>: Bibliotecas essenciais para
        desenvolvimento React.
        <br />
        <code>@arkyn/types</code>: Tipos TypeScript para os componentes da
        biblioteca.
        <br />
        <code>@remix-run/react</code>: Se estiver usando RemixJS para
        renderização do lado do servidor.
        <br />
      </Paragraph>

      <Paragraph>
        Você pode instalar esses pacotes usando npm, yarn ou bun (recomendado):
      </Paragraph>

      <Fence type="bash">
        bun i lucide-react framer-motion react react-dom @arkyn/types
        @remix-run/react
      </Fence>

      <Title as="h3">Configuração de Variáveis CSS Ambiente</Title>

      <Paragraph>
        Adicione as seguintes variáveis CSS ao seu ambiente para personalizar
        esquemas de cores:
        <br />
        (essas variáveis podem ser alteradas conforme necessário)
      </Paragraph>

      <RootCssExample />

      <NavigationContainer>
        <NavigationButton
          icon={Sparkles}
          label="Começo Rápido"
          to="/v1/doc/get-started"
        />
        <NavigationButton
          icon={Badge}
          label="Badge"
          to="/v1/components/badge"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

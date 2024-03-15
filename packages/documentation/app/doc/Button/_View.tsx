import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Badge, ScanLine } from "lucide-react";

import { Container } from "~/components/Container";
import { NavigationButton } from "~/components/NavigationButton";
import { NavigationContainer } from "~/components/NavigationContainer";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

import { Example } from "./components/Example";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components/button">Button</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Button</Title>

      <Paragraph>
        Os botões podem ser configurados com diferentes tamanhos, variantes de
        estilo e esquemas de cores. Além disso, oferece a opção de incluir
        ícones à esquerda e à direita do texto do botão. Assim como uma opção
        que colocará o botão em estado de carregamento.
      </Paragraph>

      <Paragraph>
        Principais características do componente: <br />
        <strong>isLoading:</strong> Permite indicar se o botão está em um estado
        de carregamento. <br />
        <strong>size:</strong> Define o tamanho do botão, podendo ser extra
        pequeno, pequeno, médio ou grande. <br />
        <strong>variant:</strong> Especifica o estilo visual do botão, incluindo
        opções como sólido, contorno, sombra e invisível. <br />
        <strong>scheme:</strong> Define o esquema de cores do botão, permitindo
        destacar diferentes ações ou estados. <br />
        <strong>leftIcon:</strong> Permite adicionar um ícone à esquerda do
        texto do botão, utilizando a biblioteca de ícones LucideIcon. <br />
        <strong>rightIcon:</strong> Similar ao leftIcon, mas permite adicionar
        um ícone à direita do texto do botão.
      </Paragraph>

      <Paragraph>
        Essas propriedades fornecem uma flexibilidade significativa para criar
        botões que se adequam tanto ao estilo visual quanto à funcionalidade
        desejada em qualquer aplicação.
      </Paragraph>

      <Example />

      <NavigationContainer>
        <NavigationButton
          icon={Badge}
          label="Badge"
          to="/v1/components/badge"
        />
        <NavigationButton
          icon={ScanLine}
          label="Divider"
          to="/v1/components/divider"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

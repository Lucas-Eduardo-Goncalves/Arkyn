import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { SquareMousePointer, TextCursorInput } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  Paragraph,
  Title,
} from "~/components";

import { Example } from "./components/Example";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
        <BreadcrumbLink to="/v1/components/icon-button">
          IconButton
        </BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">IconButton</Title>

      <Paragraph>
        Os botões de icones podem ser configurados com diferentes tamanhos,
        variantes de estilo e esquemas de cores. Porém ao contrario de botões
        comuns eles não podem receber filhos. Recebem uma prop <code>icon</code>{" "}
        que faz referencia ao ícone a ser exibido. Também é necessário adicionar
        uma propriedade <code>aria-label</code> para auxiliar na acessibilidade.
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
      </Paragraph>

      <Paragraph>
        Essas propriedades fornecem uma flexibilidade significativa para criar
        botões que se adequam tanto ao estilo visual quanto à funcionalidade
        desejada em qualquer aplicação.
      </Paragraph>

      <Example />

      <NavigationContainer>
        <NavigationButton
          icon={SquareMousePointer}
          label="Button"
          to="/v1/components/button"
        />
        <NavigationButton
          icon={TextCursorInput}
          label="Input"
          to="/v1/components/input"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

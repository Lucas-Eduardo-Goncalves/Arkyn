import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Captions, SquareMousePointer } from "lucide-react";

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
        <BreadcrumbLink to="/v1/components/input">Input</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Input</Title>

      <Paragraph>
        Os botões de icones podem ser configurados com diferentes tamanhos,
        variantes de estilo e esquemas de cores. Porém ao contrario de botões
        comuns eles não podem receber filhos. Recebem uma prop <code>icon</code>{" "}
        que faz referencia ao ícone a ser exibido. Também é necessário adicionar
        uma propriedade <code>aria-label</code> para auxiliar na acessibilidade.
      </Paragraph>

      <Example />

      <NavigationContainer>
        <NavigationButton
          icon={SquareMousePointer}
          label="IconButton"
          to="/v1/components/icon-button"
        />
        <NavigationButton
          icon={Captions}
          label="Modal"
          to="/v1/components/modal"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { LayoutGrid, Power } from "lucide-react";

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
        <BreadcrumbLink to="/v1/components/badge">Badge</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Badge</Title>

      <Paragraph>
        Os badges podem ser configurados com diferentes tamanhos, variantes de
        estilo e esquemas de cores.
      </Paragraph>

      <Paragraph>
        Principais características do componente: <br />
        <strong>size:</strong> Define o tamanho do badge, podendo ser médio ou
        grande. <br />
        <strong>variant:</strong> Especifica o estilo visual do badge, incluindo
        opções como sólido, contorno, e sombra. <br />
        <strong>scheme:</strong> Define o esquema de cores do badge, permitindo
        destacar diferentes ações ou estados. <br />
      </Paragraph>

      <Paragraph>
        Essas propriedades fornecem uma flexibilidade significativa para criar
        badges que se adequam tanto ao estilo visual quanto à funcionalidade
        desejada em qualquer aplicação.
      </Paragraph>

      <Example />

      <NavigationContainer>
        <NavigationButton
          icon={LayoutGrid}
          label="@arkyn/components"
          to="/v1/components"
        />
        <NavigationButton
          icon={Power}
          label="Button"
          to="/v1/components/button"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

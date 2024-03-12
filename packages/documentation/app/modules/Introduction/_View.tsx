import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Package, Sparkles } from "lucide-react";

import { Container } from "~/components/Container";
import { NavigationButton } from "~/components/NavigationButton";
import { NavigationContainer } from "~/components/NavigationContainer";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/doc/introduction">Introdução</BreadcrumbLink>
      </Breadcrumb>

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

      <NavigationContainer>
        <NavigationButton
          icon={Package}
          label="Sobre o Arkyn"
          to="/v1/doc/about"
        />
        <NavigationButton
          icon={Sparkles}
          label="Começar"
          to="/v1/doc/get-started"
        />
      </NavigationContainer>
    </Container>
  );
}

export { View };

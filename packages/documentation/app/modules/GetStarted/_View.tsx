import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

import { Container } from "~/components/Container";
import { NavigationButton } from "~/components/NavigationButton";
import { NavigationContainer } from "~/components/NavigationContainer";
import { Paragraph } from "~/components/Paragraph";
import { Title } from "~/components/Title";

import { Archive, LayoutGrid, Rss, Webhook } from "lucide-react";

function View() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
        <BreadcrumbLink to="/v1/doc/get-started">Começo Rápido</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Começo Rápido</Title>

      <Paragraph>
        Os pacotes a seguir são configurados de maneira independente, exigindo
        instalação separada. Todos eles têm dependência do pacote
        <code> @arkyn/types</code>; portanto, este deve ser instalado antes de
        qualquer outro, especialmente se estiver utilizando TypeScript. <br />
        As dependências no Arkyn são especificadas como{" "}
        <code>peerDependencies</code>, o que requer instalação nos projetos.
        Isso evita redundâncias e oferece maior controle sobre o que é
        instalado, facilitando o uso das dependências para o programador.
      </Paragraph>

      <NavigationContainer>
        <NavigationButton
          icon={LayoutGrid}
          label="@arkyn/components"
          to="/v1/components"
        />
        <NavigationButton icon={Rss} label="@arkyn/api" to="/v1/api" />
        <NavigationButton icon={Webhook} label="@arkyn/hooks" to="/v1/hooks" />
        <NavigationButton icon={Archive} label="@arkyn/utils" to="/v1/utils" />
      </NavigationContainer>
    </Container>
  );
}

export { View };

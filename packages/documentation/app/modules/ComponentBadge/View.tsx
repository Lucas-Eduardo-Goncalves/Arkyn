import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";
import { Component, SquareMousePointer } from "lucide-react";

import {
  Container,
  NavigationButton,
  NavigationContainer,
  SubMenu,
  SubMenuLink,
} from "~/components";

import {
  Api,
  BadgeWithIcon,
  ImportComponent,
  Introduction,
  Schemes,
  Size,
  Use,
  Variant,
} from "./components";

function View() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbLink to="/">Documentação</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components">@arkyn/components</BreadcrumbLink>
          <BreadcrumbLink to="/v1/components/badge">Badge</BreadcrumbLink>
        </Breadcrumb>

        <Introduction />
        <ImportComponent />

        <Use />
        <Size />
        <Variant />
        <Schemes />
        <BadgeWithIcon />

        <Api />

        <NavigationContainer>
          <NavigationButton
            icon={Component}
            label="@arkyn/components"
            to="/v1/doc/get-started"
          />
          <NavigationButton
            icon={SquareMousePointer}
            label="Button"
            to="/v1/components/button"
          />
        </NavigationContainer>
      </Container>

      <SubMenu>
        <SubMenuLink id="badge">Badge</SubMenuLink>
        <SubMenuLink id="importar">Importar</SubMenuLink>
        <SubMenuLink id="uso">Uso</SubMenuLink>
        <SubMenu>
          <SubMenuLink id="tamanhos">Tamanhos</SubMenuLink>
          <SubMenuLink id="variantes">Variantes</SubMenuLink>
          <SubMenuLink id="esquema-de-cores">Esquema de cores</SubMenuLink>
          <SubMenuLink id="badge-com-icone">Badge com icone</SubMenuLink>
        </SubMenu>
        <SubMenuLink id="api">Api</SubMenuLink>
      </SubMenu>
    </>
  );
}

export { View };
